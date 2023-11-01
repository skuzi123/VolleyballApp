export class Season {
  private _seasonName: string;
  private _startDate: Date;
  private _endDate: Date;

  constructor(seasonName: string, startDate: Date, endDate: Date) {
    this._seasonName = seasonName;
    this._startDate = startDate;
    this._endDate = endDate;
  }

  get seasonName(): string {
    return this._seasonName;
  }

  set seasonName(value: string) {
    this._seasonName = value;
  }

  get startDate(): Date  {
    return this._startDate;
  }

  set startDate(value: Date) {
    this._startDate = value;
  }

  get endDate(): Date  {
    return this._endDate;
  }

  set endDate(value: Date ) {
    this._endDate = value;
  }
}

