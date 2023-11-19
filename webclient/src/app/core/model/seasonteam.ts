import {SeasonTeamId} from "./seasonteamid";

export class SeasonTeam {
  private _id: SeasonTeamId;
  private _points: number;
  private _seasonId: string;
  private _teamId: string;


  constructor(id: SeasonTeamId, points: number, seasonId: string, teamId: string) {
    this._id = id;
    this._points = points;
    this._seasonId = seasonId;
    this._teamId = teamId;
  }


  get id(): SeasonTeamId {
    return this._id;
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
