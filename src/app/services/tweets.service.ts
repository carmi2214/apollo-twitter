import {Injectable} from '@angular/core';
import {AllTweetsGQL, PostTweetGQL, Tweet, TweetsByTagNameGQL} from './graphql/tweets.gql';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {HttpHeaders} from '@angular/common/http';
import {UserByUsernameGQL} from './graphql/users.gql';

@Injectable({
  providedIn: 'root'
})
export class TweetsService {

  constructor(private allTweetsGQL: AllTweetsGQL,
              private postTweetGQL: PostTweetGQL,
              private tweetsByTagNameGQL: TweetsByTagNameGQL,
              private userByUsername: UserByUsernameGQL) {
  }

  getTweets(): Observable<Tweet[]> {
    return this.allTweetsGQL.watch().valueChanges.pipe(map(result => result.data.allTweets));
  }

  getTweetsByTagName(tagName: string): Observable<Tweet[]> {
    return this.tweetsByTagNameGQL.watch({
      tag: tagName
    }).valueChanges.pipe(map(result => result.data.tweetsByTagName));
  }

  getTweetsByUsername(username: string): Observable<Tweet[]>{
    return this.userByUsername.watch({
      username
    }).valueChanges.pipe(map ( result => result.data.userByUsername.tweets));
  }

  postTweet(tweetBody: string, username: string): Observable<Tweet> {
    return this.postTweetGQL.mutate(
      {tweetBody}
      , {
        context: {headers: new HttpHeaders().set('username', username)}
      });
  }
}
