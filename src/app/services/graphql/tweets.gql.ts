import {Injectable} from '@angular/core';
import {Mutation, Query} from 'apollo-angular';
import gql from 'graphql-tag';
import { User } from './users.gql';

export interface Tweet {
  id: string;
  body: string;
  date: Date;
  user: User;
}

export interface AllTweetsResponse {
  allTweets: Tweet[];
}

export interface TweetResponse {
  tweet: Tweet;
}

@Injectable({
  providedIn: 'root',
})
export class AllTweetsGQL extends Query<AllTweetsResponse> {
  document = gql`{
    allTweets{
      date
      body
      user{
        firstName
        lastName
        username
      }
    }
  }`;
}

@Injectable({
  providedIn: 'root',
})
export class PostTweetGQL extends Mutation<TweetResponse> {
  document = gql`
    mutation($tweetBody: String!){
    createTweet(body:$tweetBody){
      body,
      date
      user{
        username
        firstName
        lastName
      }
    }
  }`;
}
