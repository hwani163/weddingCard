import axios from 'axios';
import Cookies from 'universal-cookie';
import Router from 'next/router';

const instance = axios.create({
  timeout: 20000,
});
const cookies = new Cookies()
instance.interceptors.request.use(async (config) => {
  const { loading } = global.actions;
  loading(true);
  const jwt = cookies.get('gobeToken');
  if (config.form === true) config.headers = { "ContentType": "multipart/form-data" };
  if (!!jwt) {
    config.headers.Authorization = jwt;
  }

  return config;
},
  (error) => Promise.reject(error));
instance.interceptors.response.use((response) => {
  const { loading } = global.actions;
  loading(false);
  return response;

}, (error) => {
  const { loading } = global.actions;
  loading(false);
  // console.log(error)
  if (error.response.status === 401) {
    cookies.remove('gobeToken');
    alert('토큰만료')
    Router.replace('/login');
  }

  return error.response
});

export default instance;

export const hookFetch = (url) => fetch(url).then((r) => r.json()).catch(e => console.log(e));
