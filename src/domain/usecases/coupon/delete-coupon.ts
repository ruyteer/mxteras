export interface DeleteCouponUseCase {
  delete(id: string): Promise<void>;
}
