import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent implements OnInit {

  @Input()
  tweet: Tweet;

  constructor() { }

  ngOnInit() {
  }

  getFullName(): string {
    return this.tweet.author.firstName + ' ' + this.tweet.author.lastName;
  }

  timeSince(date): string {

    const nowDate: any = new Date();

    const seconds: any = Math.floor((nowDate - date) as number / 1000);

    let interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
      return interval + 'y';
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + 'M';
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + 'd';
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + 'h';
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + 'm';
    }
    return Math.floor(seconds) + 's';
  }

}
