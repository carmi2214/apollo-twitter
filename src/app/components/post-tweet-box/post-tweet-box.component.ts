import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UsersService} from '../../services/users.service';
import {TweetsService} from '../../services/tweets.service';
import {Tweet, User} from '../../entities/types';

@Component({
  selector: 'app-post-tweet-box',
  templateUrl: './post-tweet-box.component.html',
  styleUrls: ['./post-tweet-box.component.css']
})
export class PostTweetBoxComponent implements OnInit {

  postTweetForm: FormGroup = this.fb.group({
    tweetText: [''],
    usersControl: ['']
  });
  users: User[] = [];

  @Output()
  sentTweetUpdate: EventEmitter<Tweet> = new EventEmitter<Tweet>();

  constructor(private usersService: UsersService, private tweetsService: TweetsService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.usersService.getUsers().subscribe(result => this.users = result);
  }

  postTweet() {
    const tweetText: string = this.postTweetForm.controls.tweetText.value;
    const username = this.postTweetForm.controls.usersControl.value;
    if (username === '' || tweetText === undefined || tweetText === '') {
      alert('Choose user or enter tweet text');
      return;
    }

    this.tweetsService.postTweet(tweetText, username).subscribe(result => {
      this.postTweetForm.controls.tweetText.setValue('');
      this.sentTweetUpdate.emit((result as any).data.createTweet as Tweet);
      }
    )
    ;
  }

}
