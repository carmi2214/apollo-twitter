import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TweetsService {

  constructor() { }

  getTweets(): Tweet[] {
    const dateOfTweet: Date = new Date();
    const dateOfTweetNow: Date = new Date();
    dateOfTweet.setHours(1);
    dateOfTweetNow.setMinutes(3);
    const user: User = {firstName: 'Arik', lastName: 'Furman', id: '1', avatarUrl: '', username: 'arikf', password: 'ricardo'};
    return [{body: 'Test Test #white power man', author: user, date: dateOfTweet} as Tweet,
            {body: 'Test Test', author: user, date: dateOfTweetNow} as Tweet,
            {body: 'Test Test', author: user} as Tweet,
            {body: 'Test Test', author: user} as Tweet,
            {body: 'Test Test', author: user} as Tweet];
  }
}
