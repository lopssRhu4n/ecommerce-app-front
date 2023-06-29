import Client from '@/http/clients/AxiosClient';
import type { IProductToCart } from '@/interfaces/ProductToCartInterface';

const resource = '/cart';

export const CartService = {
  addProductToCart(payload: IProductToCart) {
    return Client.post(resource + '/product', payload);
  },

  getCart(id: number) {
    return Client.get(resource + '/' + id);
  },
};
