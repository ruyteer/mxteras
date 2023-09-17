export interface CreateBannerUseCases {
  create(file: string): Promise<void>;
}
