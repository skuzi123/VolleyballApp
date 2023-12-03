export class Player {
  private _id: string;
  private _userId: string;

  private _name: string;

  private _surname: string;

  private _age: number;

  private _experience: number;

  private _position: string;

  private _weight: number;


  private _height: number;


  private _attackRange: number;

  private _blockRange: number;


  private _teamId: string;

  private _starter: boolean;

  constructor(id: string, userId: string, name: string, surname: string, age: number, experience: number, position: string, weight: number, height: number, attackRange: number, blockRange: number, teamId: string, starter: boolean) {
    this._id = id;
    this._userId = userId;
    this._name = name;
    this._surname = surname;
    this._age = age;
    this._experience = experience;
    this._position = position;
    this._weight = weight;
    this._height = height;
    this._attackRange = attackRange;
    this._blockRange = blockRange;
    this._teamId = teamId;
    this._starter = starter;
  }


  get starter(): boolean {
    return this._starter;
  }

  set starter(value: boolean) {
    this._starter = value;
  }


  get id(): string {
    return this._id;
  }


  get userId(): string {
    return this._userId;
  }

  set userId(value: string) {
    this._userId = value;
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

  get experience(): number {
    return this._experience;
  }

  set experience(value: number) {
    this._experience = value;
  }

  get position(): string {
    return this._position;
  }

  set position(value: string) {
    this._position = value;
  }

  get weight(): number {
    return this._weight;
  }

  set weight(value: number) {
    this._weight = value;
  }

  get height(): number {
    return this._height;
  }

  set height(value: number) {
    this._height = value;
  }

  get attackRange(): number {
    return this._attackRange;
  }

  set attackRange(value: number) {
    this._attackRange = value;
  }

  get blockRange(): number {
    return this._blockRange;
  }

  set blockRange(value: number) {
    this._blockRange = value;
  }

  get teamId(): string {
    return this._teamId;
  }

  set teamId(value: string) {
    this._teamId = value;
  }
}
