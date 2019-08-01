import {Injectable} from '@angular/core';
import {Query} from 'apollo-angular';
import gql from 'graphql-tag';

export interface User {
  id: string;
  username: string;
  password?: string;
  firstName: string;
  lastName: string;
  avatarUrl?: string;
}

export interface AllUsersResponse {
  allUsers: User[];
}

@Injectable({
  providedIn: 'root',
})
export class UsersGql extends Query<AllUsersResponse> {
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
