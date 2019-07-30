import { Component, OnInit } from '@angular/core';
import {TweetsService} from '../../services/tweets.service';

@Component({
  selector: 'app-tweets-container',
  templateUrl: './tweets-container.component.html',
  styleUrls: ['./tweets-container.component.scss']
})
export class TweetsContainerComponent implements OnInit {

  constructor(private tweetsService: TweetsService) { }

  tweets: Tweet[] = [];

  ngOnInit() {
    this.tweets = this.tweetsService.getTweets();
  }

}
