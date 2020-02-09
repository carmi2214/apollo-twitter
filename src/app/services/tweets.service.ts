import {Injectable} from '@angular/core';
import {Tweet, TweetsResponse} from './graphql/tweets.gql';
import {Observable} from 'rxjs';
import {FetchResult} from 'apollo-link';

@Injectable({
  providedIn: 'root'
})
export class TweetsService {

  // Todo: Use here all the services you declared in the gql files
  constructor() {
  }

  // Todo
  getTweets(): Observable<Tweet[]> {
    return new Observable<Tweet[]>();
  }

  // Todo
  getTweetsByTagName(tagName: string): Observable<Tweet[]> {
    return new Observable<Tweet[]>();
  }

  // Todo
  getTweetsByUsername(username: string): Observable<Tweet[]> {
    return new Observable<Tweet[]>();
  }

  // Todo
  postTweet(tweetBody: string, username: string): Observable<FetchResult<TweetsResponse>> {
    return new Observable<FetchResult<TweetsResponse>>();
  }
}
