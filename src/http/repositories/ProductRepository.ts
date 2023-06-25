import Client from '@/http/clients/AxiosClient';

const productResource = '/product/';

export default {
  getProducts() {
    return Client.get(productResource);   
  }
}
