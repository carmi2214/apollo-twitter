import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {HttpHeaders} from '@angular/common/http';
import {Tweet} from '../entities/types';

@Injectable({
  providedIn: 'root'
})
export class TweetsService {

  // TODO ADD ALL THE GQL SERVICES HERE
  constructor() {
  }

  getTweets(): Observable<Tweet[]> {
    // TODO
    return new Observable<Tweet[]>();
  }

  getTweetsByTagName(tagName: string): Observable<Tweet[]> {
    // TODO
    return new Observable<Tweet[]>();
  }

  getTweetsByUsername(username: string): Observable<Tweet[]> {
    // TODO
    return new Observable<Tweet[]>();
  }

  postTweet(tweetBody: string, username: string): Observable<Tweet> {
    // TODO
    return new Observable<Tweet>();
  }
}
