export interface Tweet {
  id: string;
  body: string;
  date: Date;
  user: User;
}

export interface User {
  id: string;
  username: string;
  password?: string;
  firstName: string;
  lastName: string;
  avatarUrl?: string;
  tweets: Tweet[];
}
