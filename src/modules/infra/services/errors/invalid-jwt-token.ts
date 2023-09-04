export class InvalidJwtToken extends Error {
  constructor() {
    super("Invalid JWT Token!");
    this.name = "InvalidJwtTokenError";
  }
}
