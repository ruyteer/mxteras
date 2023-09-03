export class MissingProductError extends Error {
  constructor() {
    super(
      "We don't have products on database. Please, create a product to make this request"
    );

    this.name = "MissingProductError";
  }
}
