import Axios from 'axios';

export const axios = Axios.create({
    baseURL: 'http://localhost:6000/api/quiz'
})