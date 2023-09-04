export interface CheckAdminProtocol {
  checkAdmin(token: string): Promise<void>;
}
