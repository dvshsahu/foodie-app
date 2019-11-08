import Axios from 'axios';

const instance = Axios.create({
    baseURL:'https://f00die-server.herokuapp.com/'
});

export default instance;