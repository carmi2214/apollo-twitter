import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UsersService} from '../../services/users.service';
import {User} from '../../services/graphql/users.gql';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = this.fb.group({
    username: [''],
    firstName: [''],
    lastName: [''],
    password: [''],
  });

  constructor(private fb: FormBuilder, private usersService: UsersService, private router: Router) {
  }

  ngOnInit() {
  }


  registerUser() {
    const userToRegister: User = this.createUserFromForm();
    this.usersService.registerUser(userToRegister).subscribe(result => this.router.navigateByUrl('/'));
  }

  createUserFromForm(): User {
    return ({
      username: this.registerForm.controls.username.value,
      password: this.registerForm.controls.password.value,
      firstName: this.registerForm.controls.firstName.value,
      lastName: this.registerForm.controls.lastName.value,
    }) as User;
  }

}
