import {makeAutoObservable} from "mobx";
import {login , registration} from "../http/userAPI"
import axios from "axios";

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

    async login(email, username, password, ) {
        try {
            const data = await login(email, username, password);
            console.log(data)
            localStorage.setItem('token', data.access);
            this.setAuth(true);
            this.setUser(data);
            console.log(data)
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

    // async logout() {
    //     try {
    //         const response = await AuthService.logout();
    //         localStorage.removeItem('token');
    //         this.setAuth(false);
    //         this.setUser();
    //     } catch (e) {
    //         console.log(e.response?.data?.message);
    //     }
    // }

    async checkAuth(email, username, password,) {
        this.setLoading(true);
        try {
            const data = await axios.post(`'http://localhost:8000/auth/jwt/refresh/`, 
                {
                    email, 
                    username, 
                    password,
                })
            console.log(data);
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
