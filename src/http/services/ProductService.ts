import Client from '@/http/clients/AxiosClient';

const productResource = '/product/';

export const ProductService = {
  getProducts() {
    return Client.get(productResource);
  },

  getSingleProduct(id: number) {
    return Client.get(productResource + id);
  },
};
