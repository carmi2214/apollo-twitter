import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { TweetComponent } from './components/tweet/tweet.component';
import { TweetsContainerComponent } from './components/tweets-container/tweets-container.component';
import {NgxLinkifyjsModule} from 'ngx-linkifyjs';
import { PostTweetBoxComponent } from './components/post-tweet-box/post-tweet-box.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TweetComponent,
    TweetsContainerComponent,
    PostTweetBoxComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxLinkifyjsModule.forRoot(),
    GraphQLModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
