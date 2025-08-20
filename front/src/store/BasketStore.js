import {makeAutoObservable} from "mobx";

export default class BasketStore {
    constructor() {
        this._basketDevice = [
        ]
        makeAutoObservable(this)
    }

    set_BasketDevice(basketDevice) {
        this._basketDevice = basketDevice
    }

    get user() {
        return this._user
    }
    get basketDevice() {
        return this._basketDevice
    }

}
