export class Set {
  private _id: string;
  private _matchId: string;
  private _setNumber: number;
  private _homePoints: number;
  private _awayPoints: number;

  constructor(_id: string, _matchId: string, _setNumber: number, _homePoints: number, _awayPoints: number) {
    this._id = _id;
    this._matchId = _matchId;
    this._setNumber = _setNumber;
    this._homePoints = _homePoints;
    this._awayPoints = _awayPoints;
  }


  get id(): string {
    return this._id;
  }


  get matchId(): string {
    return this._matchId;
  }

  set matchId(value: string) {
    this._matchId = value;
  }

  get setNumber(): number {
    return this._setNumber;
  }

  set setNumber(value: number) {
    this._setNumber = value;
  }

  get homePoints(): number {
    return this._homePoints;
  }

  set homePoints(value: number) {
    this._homePoints = value;
  }

  get awayPoints(): number {
    return this._awayPoints;
  }

  set awayPoints(value: number) {
    this._awayPoints = value;
  }
}
