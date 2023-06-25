import AuthRepository from './repositories/AuthRepository';

const repos = {
  auth: AuthRepository,
};

export default {
  get: (name: any) => repos[name],
};
