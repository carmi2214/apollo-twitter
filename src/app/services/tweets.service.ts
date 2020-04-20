import {Injectable} from '@angular/core';
import {Tweet, TweetsMutationGql, TweetsQueryGql, TweetsResponse} from './graphql/tweets.gql';
import {Observable} from 'rxjs';
import {FetchResult} from 'apollo-link';
import {pluck} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TweetsService {

  // Todo: Use here all the services you declared in the gql files
  constructor(private tweetsQueryGql: TweetsQueryGql, private tweetsMutationGql: TweetsMutationGql) {
  }

  // Todo
  getTweets(): Observable<Tweet[]> {
    this.tweetsQueryGql.getAllTweets();
    return this.tweetsQueryGql.watch().valueChanges.pipe(
      pluck('data', 'allTweets')
    );
  }

  // Todo
  getTweetsByTagName(tagNameToSearch: string): Observable<Tweet[]> {
    this.tweetsQueryGql.getTweetsByTag();
    return this.tweetsQueryGql.watch({tagName: tagNameToSearch}).valueChanges.pipe(pluck('data', 'tweetsByTagName'));
  }

  // Todo
  getTweetsByUsername(userName: string): Observable<Tweet[]> {
    this.tweetsQueryGql.getTweetsByUsername();
    return this.tweetsQueryGql.watch({username: userName}).valueChanges.pipe(pluck('data', 'tweetsByUsername'));
  }

  // Todo
  postTweet(tweetBody: string, userName: string): Observable<FetchResult<TweetsResponse>> {
    return this.tweetsMutationGql.mutate({body: tweetBody}, {context: {headers: {username : userName}}});
  }
}
