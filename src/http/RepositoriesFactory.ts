import AuthRepository from './repositories/AuthRepository';
import ProductRepository from './repositories/ProductRepository';

const repos = {
  auth: AuthRepository,
  product: ProductRepository,
};

export default {
  get: (name: keyof typeof repos) => repos[name],
};
