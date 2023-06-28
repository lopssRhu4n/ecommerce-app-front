import axios from 'axios';

const baseURL = 'http://localhost/api';

export default axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' },
});
