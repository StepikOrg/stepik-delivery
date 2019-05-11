import axios from 'axios'

export default () => {
  const instance = axios.create({

    baseURL: `${localStorage.getItem('apiIp')}`,
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
