import {Component, OnInit} from '@angular/core';
import {TweetsService} from '../../services/tweets.service';
import {Tweet} from '../../services/graphql/tweets.gql';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tweets-container',
  templateUrl: './tweets-container.component.html',
  styleUrls: ['./tweets-container.component.scss']
})
export class TweetsContainerComponent implements OnInit {

  constructor(private tweetsService: TweetsService, private routeParams: ActivatedRoute) {
  }

  tweets: Tweet[] = [];

  ngOnInit() {
    this.routeParams.params.subscribe(params => this.loadData(params));
  }

  loadData(params: any) {
    if (params.hash) {
      alert(params.hash);
    } else if (params.username) {
      alert(params.username);
    } else {
      this.updateTweets();
    }
  }

  updateTweets(event?) {
    if (event === undefined) {
      this.tweetsService.getTweets().subscribe(result => this.tweets = result);
    } else {
      this.tweets.push(event);
    }
  }

}
