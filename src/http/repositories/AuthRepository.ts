import Client from '@/http-clients/AxiosClient';
import type { registerData } from '@/interfaces/RegisterDataInterface';

const registerResource = '/register';

export default {
  register(payload: registerData) {
    return Client.post(registerResource, payload);
  },
};
