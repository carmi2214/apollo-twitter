import {Component, Input, OnInit} from '@angular/core';
import {Tweet} from '../../services/graphql/tweets.gql';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent implements OnInit {

  @Input()
  tweet: Tweet;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  getFullName(): string {
    return this.tweet.user.firstName + ' ' + this.tweet.user.lastName;
  }

  formatHref(value, type) {
    if (value.indexOf('#') !== -1) {
      return 'tag/' + value.toString().substr(1);
    } else if (value.index('@') !== -1) {
      return 'user/' + value.toString().substr(1);
    }

    return value;
  }

  navigateToUserPage(username: string) {
    this.router.navigate(['user', username]);
  }

  timeSince(date): string {
    const convertedDate = Date.parse(date);
    const nowDate: any = new Date();

    let seconds: any = Math.floor((nowDate - convertedDate) as number / 1000);

    let interval = Math.floor(seconds / 31536000);

    if (interval >= 1) {
      return interval + ' years';
    }
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) {
      return interval + ' months';
    }
    interval = Math.floor(seconds / 86400);
    if (interval >= 1) {
      return interval + ' days';
    }
    interval = Math.floor(seconds / 3600);
    if (interval >= 1) {
      return interval + 'h';
    }
    interval = Math.floor(seconds / 60);
    if (interval >= 1) {
      return interval + 'm';
    }

    seconds = Math.floor(seconds);
    return seconds && seconds + 's' || 'Now';
  }

}
