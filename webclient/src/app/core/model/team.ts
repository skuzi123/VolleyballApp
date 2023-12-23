export class Team {
  private _id?: string;
  private _teamName: string;
  private _image: string;

  constructor(teamName: string, image: string) {
    this._teamName = teamName;
    this._image = image;
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


  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }
}
