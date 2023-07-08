import Client from '@/http/clients/AxiosClient';
import type { ILoginData } from '@/interfaces/Auth/LoginDataInterface';
import type { IRegisterData } from '@/interfaces/Auth/RegisterDataInterface';

const registerResource = '/client/register';

export const authService = {
  register(payload: IRegisterData) {
    return Client.post(registerResource, payload);
  },

  login(payload: ILoginData) {
    return Client.post('/login', payload);
  },

  retrieveUserData() {
    return Client.get('/user');
  },
};
