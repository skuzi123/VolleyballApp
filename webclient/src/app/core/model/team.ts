export class Team {
  private _id: string;
  private _teamName: string;

  constructor(id: string, teamName: string) {
    this._id = id;
    this._teamName = teamName;
  }

  get id(): string {
    return this._id;
  }


  get teamName(): string {
    return this._teamName;
  }

  set teamName(value: string) {
    this._teamName = value;
  }
}
