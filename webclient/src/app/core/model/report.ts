export class Report {
  private _id?: string;
  private _reportName: string;

  private _reportText: string;

  private _createdByUserId: string;


  constructor(reportName: string, reportText: string, createdByUserId: string) {
    this._reportName = reportName;
    this._reportText = reportText;
    this._createdByUserId = createdByUserId;
  }


  get reportName(): string {
    return this._reportName;
  }

  set reportName(value: string) {
    this._reportName = value;
  }

  get reportText(): string {
    return this._reportText;
  }

  set reportText(value: string) {
    this._reportText = value;
  }

  get createdByUserId(): string {
    return this._createdByUserId;
  }

  set createdByUserId(value: string) {
    this._createdByUserId = value;
  }
}
