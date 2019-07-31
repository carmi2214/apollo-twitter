import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { TweetComponent } from './components/tweet/tweet.component';
import { TweetsContainerComponent } from './components/tweets-container/tweets-container.component';
import {NgxLinkifyjsModule} from 'ngx-linkifyjs';
import { PostTweetBoxComponent } from './components/post-tweet-box/post-tweet-box.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TweetComponent,
    TweetsContainerComponent,
    PostTweetBoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxLinkifyjsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
