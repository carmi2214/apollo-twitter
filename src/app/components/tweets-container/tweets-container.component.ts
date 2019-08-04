import {Component, OnInit} from '@angular/core';
import {TweetsService} from '../../services/tweets.service';
import {Tweet} from '../../services/graphql/tweets.gql';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-tweets-container',
  templateUrl: './tweets-container.component.html',
  styleUrls: ['./tweets-container.component.scss']
})
export class TweetsContainerComponent implements OnInit {

  constructor(private tweetsService: TweetsService, private routeParams: ActivatedRoute, private router: Router) {
  }

  tweets: Tweet[] = [];

  ngOnInit() {
    this.routeParams.params.subscribe(params => this.loadTweetsByParam(params));
  }

  loadTweetsByParam(params: any) {
    if (params.hash) {
      this.loadTweets(this.tweetsService.getTweetsByTagName(params.hash));
    } else if (params.username) {
      this.loadTweets(this.tweetsService.getTweetsByUsername(params.username));
    } else {
      this.updateTweets();
    }
  }

  updateTweets(event?) {
    if (event === undefined || (this.router.url !== '' && this.router.url !== '/')) {
      if (this.router.url !== '') {
        this.router.navigateByUrl('');
      }
      this.loadTweets(this.tweetsService.getTweets());

    } else {
      this.tweets.push(event);
    }
  }

  loadTweets(tweetsPromise: Observable<Tweet[]>) {
    tweetsPromise.subscribe(result => this.tweets = result);
  }

}
