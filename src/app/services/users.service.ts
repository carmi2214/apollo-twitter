import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from './graphql/users.gql';
import {FetchResult} from 'apollo-link';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // Todo use here all the apollo services you declared in the gql files
  constructor() {
  }

  // Todo
  getUsers(): Observable<User[]> {
    return new Observable<User[]>();
  }

  // Todo
  registerUser(userToRegister: User): Observable<FetchResult<{}>> {
    return new Observable<FetchResult<{}>>();
  }
}
