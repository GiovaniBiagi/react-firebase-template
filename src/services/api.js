import axios from 'axios';
import HttpResponseErrorHandler from './HttpResponseErrorHandler';
import HttpResponseSuccessHandler from './HttpResponseSuccessHandler';

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

instance.interceptors.response.use(HttpResponseSuccessHandler, HttpResponseErrorHandler);

export default instance;