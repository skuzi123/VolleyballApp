export class Match {
  private _id?: string;
  private _hostTeamId: string;
  private _guestTeamId: string;
  private _matchDate: Date;
  private _result: string;

  constructor(hostTeamId: string, guestTeamId: string, matchDate: Date, result: string) {
    this._hostTeamId = hostTeamId;
    this._guestTeamId = guestTeamId;
    this._matchDate = matchDate;
    this._result = result;
  }


  get matchDate(): Date {
    return this._matchDate;
  }

  set matchDate(value: Date) {
    this._matchDate = value;
  }

  get result(): string {
    return this._result;
  }

  set result(value: string) {
    this._result = value;
  }

  get id(): string {
    return this._id as string;
  }

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
