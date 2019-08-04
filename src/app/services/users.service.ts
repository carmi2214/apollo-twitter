import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {User} from '../entities/types';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // TODO ADD HERE ALL THE GQL SERVICES
  constructor() {
  }

  getUsers(): Observable<User[]> {
    // TODO
    return new Observable<User[]>();
  }

  registerUser(userToRegister: User): Observable<User> {
    // TODO
    return new Observable<User>();
  }
}
