export class InvalidAdminCredentials extends Error {
  constructor() {
    super("Invalid credentials!");
    this.name = "InvalidAdminCredentials";
  }
}
