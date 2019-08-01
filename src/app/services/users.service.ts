import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersGql, User } from './graphql/users.gql';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private allUsers: UsersGql) {
  }

  getUsers(): Observable<User[]> {
    return this.allUsers.watch().valueChanges.pipe(map(result => result.data.allUsers));
  }
}
