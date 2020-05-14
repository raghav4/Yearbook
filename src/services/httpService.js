import axios from 'axios';
import logger from './logService';
// import { TimerAlert } from '../components';

axios.interceptors.response.use(null, (error) => {
  const expectedErrors =
    error.response && error.response.status >= 400 && error.response.status < 500;
  if (!expectedErrors) {
    logger.log(error);
    // TimerAlert('Error', ' An unexpected error occurred', 'error');
  }
  return Promise.reject(error);
});

const setJwt = (jwt) => {
  axios.defaults.headers.common['x-auth-token'] = jwt;
};

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt,
};
