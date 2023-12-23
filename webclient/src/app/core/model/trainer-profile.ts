
export class TrainerProfile {
  private _name: string;
  private _surname: string;
  private _age: number;
  private _workHistory: string;
  private _achievements: string;
  private _image: string;

  constructor(userId: string, teamId: string, name: string, surname: string, age: number, workHistory: string, achievements: string,image: string) {
    this._name = name;
    this._surname = surname;
    this._age = age;
    this._workHistory = workHistory;
    this._achievements = achievements;
    this._image = image;
  }


  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get surname(): string {
    return this._surname;
  }

  set surname(value: string) {
    this._surname = value;
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    this._age = value;
  }

  get workHistory(): string {
    return this._workHistory;
  }

  set workHistory(workHistory: string) {
    this._workHistory = workHistory;
  }

  get achievements(): string {
    return this._achievements;
  }

  set achievements(achievements: string) {
    this._achievements = achievements;
  }


  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }
}
