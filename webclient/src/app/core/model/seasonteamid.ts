export class SeasonTeamId {
 private _seasonId: string;
 private _teamId: string;

  constructor(seasonId: string, teamId: string) {
    this._seasonId = seasonId;
    this._teamId = teamId;
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
