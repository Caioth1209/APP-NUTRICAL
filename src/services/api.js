import axios from 'axios';

export default axios.create({
    baseURL: 'http://192.168.0.100:4000/api/v1/',
});