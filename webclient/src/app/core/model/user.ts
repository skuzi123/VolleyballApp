import {Trainer} from "./trainer";
import {Player} from "./player";

export enum ERole {
  PLAYER = "PLAYER",
  TRAINER = "TRAINER",
  ADMIN = "ADMIN"

}

export class User{
  private _id: string;
  private _username: string;
  private _password: string;
  private _role: ERole;
  private _trainer?: Trainer;
  private _player?: Player;

  constructor(id: string, username: string, password: string, role: ERole, trainer?: Trainer, player?: Player) {
   this._id = id;
    this._username = username;
    this._password = password;
    this._role = role;
    this._trainer = trainer;
    this._player = player;
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

  get trainer(): Trainer | undefined {
    return this._trainer;
  }

  set trainer(trainer: Trainer | undefined) {
    this._trainer = trainer;
  }

  get player(): Player | undefined {
    return this._player;
  }

  set player(player: Player | undefined) {
    this._player = player;
  }
}

