import axios from 'axios'

const api = axios.create({
    baseURL: 'https://ctdcommerce.herokuapp.com/'
})

export default api