import {Injectable} from '@angular/core';
import {Mutation, Query} from 'apollo-angular';
import gql from 'graphql-tag';
import {Tweet} from './tweets.gql';
import {FetchResult} from 'apollo-link';

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
  // Todo: Here you will declare all the possible responses from the graphql service (query names and types)
  // Delete the following placeholder:
  allUsers: User[];
  createUser: FetchResult<{}>;
}

// Todo: Implement all the needed gql services (as shown in the presentation)

// Remember to include the following attribute above each(!) service you write in order to use them in the angular services
@Injectable({
  providedIn: 'root',
})
// tslint:disable-next-line:class-name
export class usersQueriesGql extends Query<UsersResponses> {
  document;

  allUsers() {
    this.document = gql`
    query {
    allUsers{
      id
      username
      firstName
      lastName
      password
      }
    }
  `;
  }
}

@Injectable({
  providedIn: 'root',
})
// tslint:disable-next-line:class-name
export class usersMutationGql extends Mutation<UsersResponses> {
  document;

  register() {
    this.document = gql`
      mutation register ($password: String!, $username: String!,
                          $firstName: String!, $lastName: String!){
        createUser(username: $username,
        password:$password,
        firstName: $firstName,
        lastName:$lastName){
          id
          username
          firstName
          lastName
          password
        }
       }
    `;
  }
}
