import Client from '@/http/clients/AxiosClient';
import type { IRegisterData } from '@/interfaces/RegisterDataInterface';

const registerResource = '/client/register';

export default {
  register(payload: IRegisterData) {
    return Client.post(registerResource, payload);
  },
};
