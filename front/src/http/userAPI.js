import {$host} from "./index";

export const registration = async (email, username, password) => {
    const {data} = await $host.post('api/auth/register/', {email, username,  password})
    return data
}

export const login = async (email, password) => {
    const response = await $host.post('api/auth/login/', {email, password})
    return response
}

export const logout = async ()=> {
    return $host.post('api/auth/logout/')
}
