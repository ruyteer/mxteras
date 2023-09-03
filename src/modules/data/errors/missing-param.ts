export class MissingParamError extends Error {
  constructor(param: string) {
    super(`Missin param: ${param}`);
    this.name = "MissingParamError";
  }
}
