import axios from 'axios'

export default () => {
  if (process.env.NODE_ENV == 'production') {
    return axios.create({
      // other option..here
      baseURL: process.env.BASE_URL
    })
  } else {
    return axios.create({
      
      baseURL: `http://localhost:3000`
    })
  }
}