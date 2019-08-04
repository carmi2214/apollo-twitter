import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './components/main/main.component';
import {RegisterComponent} from './components/register/register.component';

const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'tag/:hash', component: MainComponent},
  { path: 'user/:username', component: MainComponent},
  { path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
