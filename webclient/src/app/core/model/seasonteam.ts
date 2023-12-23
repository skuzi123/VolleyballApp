

export class SeasonTeam {
  private _id?: string;
  private _seasonId: string;
  private _teamId: string;
  private _points: number;
  private _matches: number;


  constructor( id: string,seasonId: string, teamId: string,points: number,matches: number) {
    this._id = id;
    this._seasonId = seasonId;
    this._teamId = teamId;
    this._points = points;
    this._matches = matches;

  }


  get matches(): number {
    return this._matches;
  }

  set matches(value: number) {
    this._matches = value;
  }

  get id(): string {
    return this._id as string;
  }

  get points(): number {
    return this._points;
  }

  set points(value: number) {
    this._points = value;
  }


  get seasonId(): string {
    return this._seasonId;
  }

  set seasonId(value: string) {
    this._seasonId = value;
  }

  get teamId(): string {
    return this._teamId;
  }

  set teamId(value: string) {
    this._teamId = value;
  }
}
