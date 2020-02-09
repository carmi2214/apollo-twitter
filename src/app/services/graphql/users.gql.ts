import {Injectable} from '@angular/core';
import {Mutation, Query} from 'apollo-angular';
import gql from 'graphql-tag';
import {Tweet} from './tweets.gql';

export interface User {
  id: string;
  username: string;
  password?: string;
  firstName: string;
  lastName: string;
  avatarUrl?: string;
  tweets: Tweet[];
}

export interface UsersResponses {
  allUsers: User[];
  userByUsername: User;
}

@Injectable({
  providedIn: 'root',
})
export class UsersGql extends Query<UsersResponses> {
  document = gql`{
    allUsers{
      id
      username
      firstName
      lastName
      avatarUrl
    }
  }`;
}

@Injectable({
  providedIn: 'root',
})
export class UserByUsernameGQL extends Query<UsersResponses> {
  document = gql`
    query($username: String!){
      userByUsername(username:$username){
        tweets{
          body
          date
          user{
            username
            firstName
            lastName
          }
        }
      }
    }`;
}

@Injectable({
  providedIn: 'root',
})
export class RegisterUserGQL extends Mutation {
  document = gql`
    mutation(
      $username: String!
      $password: String!
      $firstName: String!
      $lastName: String!
    ) {
      createUser(
        username: $username
        password: $password
        firstName: $firstName
        lastName: $lastName
      ) {
        id
        username
      }
    }`;

}

