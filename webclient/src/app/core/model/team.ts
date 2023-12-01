export class Team {
  private _id?: string;
  private _teamName: string;

  constructor(teamName: string) {
    // this._id = id;
    this._teamName = teamName;
  }

  get id(): string {
    return this._id as string;
  }


  get teamName(): string {
    return this._teamName;
  }

  set teamName(value: string) {
    this._teamName = value;
  }
}
