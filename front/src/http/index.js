import axios from "axios";


export const REACT_APP_API_URL= 'http://localhost:8000/';
const Login_URL= '/login';

const $host = axios.create({
    baseURL: REACT_APP_API_URL
})

const $authHost = axios.create({
    withCredentials: true,
    baseURL: REACT_APP_API_URL
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)


$authHost.interceptors.response.use((config) => {
    return config;
},async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            const response = await axios.post(`${REACT_APP_API_URL}/api/auth/refresh-token1/`,
              )
            localStorage.setItem('token', response.data.accessToken);
            return $authHost.request(originalRequest);
        } catch (e) {
            console.log('НЕ АВТОРИЗОВАН')
        }
    }
    throw error;
})

 


export {
    $host,
    $authHost,
}
