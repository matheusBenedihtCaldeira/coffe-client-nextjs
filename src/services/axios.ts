import { API_URL } from '@/config/app-config'
import axios from 'axios'

export default axios.create({
  baseURL: 'http://127.0.0.1:1337/api',
})
