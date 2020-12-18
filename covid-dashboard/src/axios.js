import axios from 'axios';

const axiosInstance = axios.create({

  baseURL: 'https://coronavirus-tracker-api.herokuapp.com',

});

export default axiosInstance;
