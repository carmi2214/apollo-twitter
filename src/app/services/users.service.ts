import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User, usersMutationGql, usersQueriesGql} from './graphql/users.gql';
import {FetchResult} from 'apollo-link';
import {pluck} from 'rxjs/operators';
import ApolloClient from 'apollo-client';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apolloClient: ApolloClient<any>;
  // Todo use here all the apollo services you declared in the gql files
  // tslint:disable-next-line:no-shadowed-variable
  constructor(private usersQueries: usersQueriesGql, private userMutation: usersMutationGql) {
  }

  // Todo
  getUsers(): Observable<User[]> {
    this.usersQueries.allUsers();
    return this.usersQueries.watch().valueChanges.pipe(
      pluck('data', 'allUsers')
    );
  }

  // Todo
  registerUser(userToRegister: User): Observable<FetchResult<{}>> {
    this.userMutation.register();
    return this.userMutation.mutate( {
      password: userToRegister.password,
      username : userToRegister.username,
      firstName: userToRegister.firstName,
      lastName: userToRegister.lastName
    });
  }
}
