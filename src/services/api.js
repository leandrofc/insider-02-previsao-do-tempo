import axios from 'axios';
//https://api.hgbrasil.com/weather?key=611b0f2f&lat=-23.682&lon=-46.875&user_ip=remote

export const key = '611b0f2f';

const api = axios.create({
  baseURL: 'https://api.hgbrasil.com'
});

export default api;