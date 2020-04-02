import {Injectable} from '@angular/core';
import {Mutation, Query} from 'apollo-angular';
import gql from 'graphql-tag';
import {User} from './users.gql';
import {Observable} from 'rxjs';
import {FetchResult} from 'apollo-link';

export interface Tweet {
  id: string;
  description: string;
  postDate: Date;
  user: User;
}

export interface TweetsResponse {
  // Todo: Here you will declare all the possible responses from the graphql service (query names and types)
  // Delete the following placeholder:
  getTweets: {post: Tweet[]};
  getTweetsByTagName: Observable<Tweet[]>;
  getTweetsByUsername: Observable<Tweet[]>;
  postTweet: Observable<FetchResult<TweetsResponse>>;
}

// Todo: Implement all the needed gql services (as shown in the presentation)

// Remember to include the following attribute above each(!) service you write in order to use them in the angular services
// @Injectable({
//   providedIn: 'root',
// })
@Injectable({
  providedIn: 'root',
})
// tslint:disable-next-line:class-name
export class getTweets extends Query<TweetsResponse> {
  document = gql`
  query getTweets{
      id
      description
      postDate
  }`;
}
