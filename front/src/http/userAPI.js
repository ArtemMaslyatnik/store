import {$host} from "./index";
import {jwtDecode}  from "jwt-decode";

export const registration = async (email, username, password) => {
    const {data} = await $host.post('auth/users/', {email, username,  password})
    // localStorage.setItem('token', data.token)
    return data
}

export const login = async (email, username, password) => {
    const {data} = await $host.post('auth/jwt/create/', {email, username, password})
    // localStorage.setItem('token', data.access)
    // return jwtDecode(data.access)
    return data
}
