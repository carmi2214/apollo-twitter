import {Injectable} from '@angular/core';
import {Mutation, Query} from 'apollo-angular';
import gql from 'graphql-tag';
import {User} from './users.gql';
import {FetchResult} from 'apollo-link';

export interface Tweet {
  id: string;
  body: string;
  date: Date;
  user: User;
}

export interface TweetsResponse {
  // Todo: Here you will declare all the possible responses from the graphql service (query names and types)
  // Delete the following placeholder:
  allTweets: Tweet[];
  tweetsByTagName: Tweet[];
  tweetsByUsername: Tweet[];
  postTweet: FetchResult<{}>;
}


// Todo: Implement all the needed gql services (as shown in the presentation)

// Remember to include the following attribute above each(!) service you write in order to use them in the angular services
@Injectable({
  providedIn: 'root',
})
// tslint:disable-next-line:class-name
export class TweetsQueryGql extends Query<TweetsResponse> {
  document;

  getAllTweets() {
    this.document = gql`
    query{
      allTweets{
        id
        body
        date
        user{
          id
          username
          firstName
          lastName
          password
        }
        tags{
          id
          name
        }
      }
    }
  `;
  }

  getTweetsByUsername() {
    this.document = gql`
      query getTweetsByUsername($username: String!){
        tweetsByUserName(username:$username){
          id
        body
        date
        user{
          id
          username
          firstName
          lastName
          password
        }
        tags{
         id
         name
        }
        }
      }
    `;
  }

  getTweetsByTag() {
    this.document = gql`
      query getTweetsByTag($tag: String!){
        tweetsByTagName(tagName:$tag){
          id
          body
          date
          user{
            id
            username
            firstName
            lastName
            password
          }
          tags{
            id
            name
          }
        }
      }
    `;
  }
}

@Injectable({
  providedIn: 'root',
})
export class TweetsMutationGql extends Mutation<TweetsResponse> {
  document = gql`
    mutation postTweet($body: String!){
      createTweet(body: $body)
        {
          id
          body
          date
          user{
            id
            username
            firstName
            lastName
            password
          }
        }
    }
  `;
}
