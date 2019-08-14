import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.0.54.91:3333'
})

export default api;