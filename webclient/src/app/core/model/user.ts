export enum ERole {
  PLAYER = "PLAYER",
  TRAINER = "TRAINER",
  ADMIN = "ADMIN"

}

export class User {
  private _id: string;
  private _username: string;
  private _password: string;
  private _role: ERole;
  private _trainerId: string;
  private _playerId: string;

  constructor(id: string, username: string, password: string, role: ERole, trainerId: string, playerId: string) {
    this._id = id;
    this._username = username;
    this._password = password;
    this._role = role;
    this._trainerId = trainerId;
    this._playerId = playerId;
  }

  get id(): string {
    return this._id;
  }

  get username(): string {
    return this._username;
  }

  set username(username: string) {
    this._username = username;
  }

  get password(): string {
    return this._password;
  }

  set password(password: string) {
    this._password = password;
  }

  get role(): ERole {
    return this._role;
  }

  set role(role: ERole) {
    this._role = role;
  }


  get trainerId(): string {
    return this._trainerId;
  }

  set trainerId(value: string) {
    this._trainerId = value;
  }

  get playerId(): string {
    return this._playerId;
  }

  set playerId(value: string) {
    this._playerId = value;
  }
}

