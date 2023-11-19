import {User} from "./user";
import {Team} from "./team";


export class Trainer {
  private _id: string;
  private _userId: string;
  private _teamId: string;
  private _name: string;
  private _surname: string;
  private _age: number;
  private _workHistory: string;
  private _achievements: string;

  constructor(id: string, userId: string,teamId: string,name: string, surname: string, age: number, workHistory: string, achievements: string) {
    this._id = id;
    this._userId = userId;
    this._teamId = teamId;
    this._name = name;
    this._surname = surname;
    this._age = age;
    this._workHistory = workHistory;
    this._achievements = achievements;
  }

  get id(): string {
    return this._id;
  }

  get userId(): string {
    return this._userId;
  }

  set userId(value: string) {
    this._userId = value;
  }

  get teamId(): string {
    return this._teamId;
  }

  set teamId(value: string) {
    this._teamId = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get surname(): string {
    return this._surname;
  }

  set surname(value: string) {
    this._surname = value;
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    this._age = value;
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
