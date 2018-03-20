class Result {
  public status: number;
  public message: string;
  public value: object;
  constructor() {
    this.status = undefined;
    this.message = '';
    this.value = undefined;
  }
}

export default Result;
