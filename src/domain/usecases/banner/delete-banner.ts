export interface DeleteBannerUseCases {
  delete(id: string): Promise<void>;
}
