import axios from 'axios';

axios.defaults.baseURL = 'https://api.nytimes.com/svc/movies/v2/reviews';

const axiosInstance = axios.create();


export default axiosInstance;
