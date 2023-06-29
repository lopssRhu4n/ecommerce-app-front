import type { IProduct } from './ProductInterface';

export interface ICategory {
  name: string;
  description: string;
  products: IProduct[];
  id: number;
}
