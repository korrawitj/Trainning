import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-develope.firebaseio.com/'
});

export default instance;