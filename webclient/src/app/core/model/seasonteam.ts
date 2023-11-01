import {SeasonTeamId} from "./seasonteamid";
import {Season} from "./season";
import {Team} from "./team";

export class SeasonTeamEntity {
  private _id: SeasonTeamId;
  private _points: number;
  private _season: Season;
  private _team: Team;


  constructor(id: SeasonTeamId, points: number, season: Season, team: Team) {
    this._id = id;
    this._points = points;
    this._season = season;
    this._team = team;
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

  get season(): Season {
    return this._season;
  }

  set season(value: Season) {
    this._season = value;
  }

  get team(): Team {
    return this._team;
  }

  set team(value: Team) {
    this._team = value;
  }
}
