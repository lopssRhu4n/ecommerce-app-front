import type { ICart } from './CartInterface';

export interface IClient {
  name: string;
  birthdate: string;
  phone: string;
  cpf: number;
  email: string;
  cart: ICart;
}
