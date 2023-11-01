import {User} from "./user";

export class Report{
private _id: string;
  private _reportName: string;

 private _reportText: string;

  private _createdByUser: User;


  constructor(id: string, reportName: string, reportText: string, createdByUser: User) {
    this._id = id;
    this._reportName = reportName;
    this._reportText = reportText;
    this._createdByUser = createdByUser;
  }


  get id(): string {
    return this._id;
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

  get createdByUser(): User {
    return this._createdByUser;
  }

  set createdByUser(value: User) {
    this._createdByUser = value;
  }
}
