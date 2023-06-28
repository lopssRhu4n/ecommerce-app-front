import Client from '@/http/clients/AxiosClient';

const productResource = '/product/';

export const ProductService = {
  getProducts() {
    return Client.get(productResource);   
  }
}
