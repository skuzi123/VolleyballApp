import {Team} from "./team";

export class Match {
  private _id: string;
  private _hostTeam: Team;
  private _guestTeam: Team;
  private _result: string;

  constructor(_id: string, hostTeam: Team, guestTeam: Team, result: string) {
    this._id = _id;
    this._hostTeam = hostTeam;
    this._guestTeam = guestTeam;
    this._result = result;
  }


  get result(): string {
    return this._result;
  }

  set result(value: string) {
    this._result = value;
  }

  get id(): string {
    return this._id;
  }


  get hostTeam(): Team {
    return this._hostTeam;
  }

  set hostTeam(value: Team) {
    this._hostTeam = value;
  }

  get guestTeam(): Team {
    return this._guestTeam;
  }

  set guestTeam(value: Team) {
    this._guestTeam = value;
  }
}
