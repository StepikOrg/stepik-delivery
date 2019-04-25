import axios from 'axios'

export default () => {
  const instance = axios.create({

    baseURL: `${localStorage.getItem('apiIp')}${process.env.NODE_ENV === 'production'
      ? 'stepik-delivery/'
      : ''}data`,
    headers: {
      'Content-Type': 'application/json'
    }
  })

  instance.interceptors.response.use((response) => {
    return response.data
  }, (error) => {
    return Promise.reject(error);
  });

  return instance
}
