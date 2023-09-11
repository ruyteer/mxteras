export class MissingOrderError extends Error {
  constructor() {
    super(
      "We don't have orders on database. Please, create a order to make this request"
    );

    this.name = "MissingOrderError";
  }
}
