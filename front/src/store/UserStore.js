import {makeAutoObservable} from "mobx";
import {login , registration, logout} from "../http/userAPI"
import axios from "axios";
import {REACT_APP_API_URL} from "../http/index";

export default class UserStore {
    user = []
    isAuth = false;
    isLoading = false;
    
    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool) {
        this.isAuth = bool;
    }

    setUser(user) {
        this.user = user;
    }

    setLoading(bool) {
        this.isLoading = bool;
    }

    async login(email, password, ) {
        try {
            const data = await login(email, password);
            localStorage.setItem('token', data.access_token);
            console.log(data)
            this.setAuth(true);
            this.setUser(data);
        } catch (e) {
            console.log(e.data?.message);
        }
    }

    async registration(email, username, password) {
        try {
            const data = await registration(email, username, password);
            this.setAuth(true);
            this.setUser(data);
        } catch (e) {
            console.log(e.data?.message);
        }
    }

    async logout() {
        try {
            const response = await logout();
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser();
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async checkAuth(email, password) {
        this.setLoading(true);
        try {
            const data = await axios.post(`${REACT_APP_API_URL}api/auth/refresh-token/`, 
                {email, password},
                {withCredentials: true})
            localStorage.setItem('token', data.accessToken);
            this.setAuth(true);
            this.setUser(data.user);
        } catch (e) {
            console.log(e.data?.message);
        } finally {
            this.setLoading(false);
        }
    }
}
