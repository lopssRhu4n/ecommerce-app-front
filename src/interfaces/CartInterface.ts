import type { IProduct } from "./ProductInterface";

export interface ICart {
  id: number;
  amount: number;
  shipping: number;
  discount: number;
  products?: IProduct[];
}
