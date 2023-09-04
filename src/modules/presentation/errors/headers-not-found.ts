export class HeadersNotFoundError extends Error {
  constructor() {
    super("Headers not found!");
    this.name = "HeadersNotFoundError";
  }
}
