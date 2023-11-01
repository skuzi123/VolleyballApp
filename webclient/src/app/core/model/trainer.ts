import {User} from "./user";

export class Trainer{
  private _id: string;
  private _user: User;
  private _workHistory: string;
  private _achievements: string;

  constructor(id: string,user: User, workHistory: string, achievements: string) {
    this._id = id;
    this._user = user;
    this._workHistory = workHistory;
    this._achievements = achievements;
  }

  get id(): string {
    return this._id;
  }

  get user(): User{
    return this._user;
  }

  set user(user: User) {
    this._user = user;
  }

  get workHistory(): string {
    return this._workHistory;
  }

  set workHistory(workHistory: string) {
    this._workHistory = workHistory;
  }

  get achievements(): string {
    return this._achievements;
  }

  set achievements(achievements: string) {
    this._achievements = achievements;
  }
}
