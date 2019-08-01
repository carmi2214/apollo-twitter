import { Injectable } from '@angular/core';
import { AllTweetsGQL, PostTweetGQL, Tweet } from './graphql/tweets.gql';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Context } from '../entities/context';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TweetsService {

  constructor(private allTweetsGQL: AllTweetsGQL, private postTweetGQL: PostTweetGQL) {
  }

  getTweets(): Observable<Tweet[]> {
    return this.allTweetsGQL.watch().valueChanges.pipe(map(result => result.data.allTweets));
  }

  postTweet(tweetBody: string, username: string): Observable<Tweet> {
    const context: Context = new Context();
    context.setHeader('username', username);
    return this.postTweetGQL.mutate(
      {tweetBody}
      , {
        context: {headers: new HttpHeaders().set('username', username)}
      });
  }
}
