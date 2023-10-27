import axios from 'axios'

axios.defaults.headers.common['Accept'] - 'application/json'
axios.defaults.baseURL = 'http://localhost:80/api'