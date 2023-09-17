import { PreferenceProduct } from "../views/preference-product";

export interface ICreatePreference {
  create(product: PreferenceProduct): Promise<any>;
}
