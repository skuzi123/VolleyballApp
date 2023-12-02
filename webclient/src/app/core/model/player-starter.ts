export class PlayerStarter {
  private _starter: boolean;

  constructor(starter: boolean) {
    this._starter =starter;
  }

  get starter(): boolean {
    return this._starter;
  }

  set starter(value: boolean) {
    this._starter = value;
  }
}

