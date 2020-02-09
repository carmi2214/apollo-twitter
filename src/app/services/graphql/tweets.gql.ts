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
  // Todo: Here you will declare all the possible responses from the graphql service (query names and types)
  // Delete the following placeholder:
  placeholder: void;
}


// Todo: Implement all the needed gql services (as shown in the presentation)

// Remember to include the following attribute above each(!) service you write in order to use them in the angular services
// @Injectable({
//   providedIn: 'root',
// })
