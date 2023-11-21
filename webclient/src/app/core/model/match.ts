import {Team} from "./team";

export class Match {
  private _id: string;
  private _hostTeamId: string;
  private _guestTeamId: string;
  private _result: string;

  constructor(_id: string, hostTeamId: string, guestTeamId: string, result: string) {
    this._id = _id;
    this._hostTeamId = hostTeamId;
    this._guestTeamId = guestTeamId;
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

  // get hostTeam(): Team {
  //   return this._hostTeam;
  // }
  //
  // set hostTeam(value: Team) {
  //   this._hostTeam = value;
  // }
  //
  // get guestTeam(): Team {
  //   return this._guestTeam;
  // }
  //
  // set guestTeam(value: Team) {
  //   this._guestTeam = value;
  // }
  get hostTeamId(): string {
    return this._hostTeamId;
  }

  set hostTeamId(value: string) {
    this._hostTeamId = value;
  }

  get guestTeamId(): string {
    return this._guestTeamId;
  }

  set guestTeamId(value: string) {
    this._guestTeamId = value;
  }
}
