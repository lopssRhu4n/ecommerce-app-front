import Client from '@/http/clients/AxiosClient';
import type { IProductToCart } from '@/interfaces/ProductToCartInterface';

const resource = '/cart';

export const CartService = {
  addProductToCart(payload: IProductToCart) {
    return Client.post(resource, payload);
  },
};
