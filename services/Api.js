import axios from 'axios'

export default () => {
  if (process.env.NODE_ENV == 'production') {
    return axios.create({
      // other option..here
      baseURL: `http://localhost:3000`
    })
  } else {
    return axios.create({
      
      baseURL: `http://localhost:3000`
    })
  }
}