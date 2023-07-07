import type { ICart } from './CartInterface';

export interface IUser {
  id: number;
  name: string;
  email: string;
  client: {
    birthdate: string;
    cart: ICart;
    cpf: number;
    phone: string;
  };
}
