import axios from 'axios'

export default () => {
  const instance = axios.create({
    baseURL: 'http://localhost:8080/data',
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
