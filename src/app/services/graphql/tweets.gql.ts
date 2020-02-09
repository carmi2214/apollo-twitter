import { Injectable } from '@angular/core';
import { Mutation, Query } from 'apollo-angular';
import gql from 'graphql-tag';
import { User } from './users.gql';

export interface Tweet {
  id: string;
  body: string;
  date: Date;
  user: User;
}

export interface TweetsResponse {
  allTweets: Tweet[];
  tweet: Tweet;
  createTweet: Tweet;
  tweetsByTagName: Tweet[];
}

@Injectable({
  providedIn: 'root',
})
export class AllTweetsGQL extends Query<TweetsResponse> {
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
export class PostTweetGQL extends Mutation<TweetsResponse> {
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

@Injectable({
  providedIn: 'root',
})
export class TweetsByTagNameGQL extends Query<TweetsResponse> {
  document = gql`
    query ($tag: String!){
      tweetsByTagName(tagName: $tag){
        body
        date
        user{
          username
          firstName
          lastName
        }
      }
    }`;
}
