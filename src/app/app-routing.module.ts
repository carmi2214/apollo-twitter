import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './components/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'tag/:hash', component: MainComponent},
  { path: 'user/:username', component: MainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
