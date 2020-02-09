import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {UsersGql, User, RegisterUserGQL} from './graphql/users.gql';
import {map} from 'rxjs/operators';
import {FetchResult} from 'apollo-link';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private allUsersGQL: UsersGql, private registerUserGQL: RegisterUserGQL) {
  }

  getUsers(): Observable<User[]> {
    return this.allUsersGQL.watch().valueChanges.pipe(map(result => result.data.allUsers));
  }

  registerUser(userToRegister: User): Observable<FetchResult<{}>> {
    return this.registerUserGQL.mutate({
      ...userToRegister
    });
  }
}
