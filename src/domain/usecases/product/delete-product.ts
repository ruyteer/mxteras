export interface DeleteProductUseCase {
  delete(id: string): Promise<void>;
}
