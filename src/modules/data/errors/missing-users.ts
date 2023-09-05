export class MissingUserError extends Error {
  constructor() {
    super(
      "We don't have users on database. Please, create a user to make this request"
    );

    this.name = "MissingUserError";
  }
}
