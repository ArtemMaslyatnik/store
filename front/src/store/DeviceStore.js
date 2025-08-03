import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: '1', name:'Холодильник1'},
            {id: '2', name:'Холодильник2'},
            {id: '3', name:'Холодильник3'},
            {id: '4', name:'Холодильник4'},
            {id: '5', name:'Холодильник5'},
        ]
        this._brands = [
            {id: '1', name:'электрон'},
            {id: '2', name:'самсунг'},
            {id: '3', name:'лж'},
            {id: '4', name:'апле'},
            {id: '5', name:'рол'},
        ]
        this._devices = [
            {id: '1', name:'телефон самсунг', price: 2500, rating: 5, img: '#', type: 1, brand: 1},
            {id: '1', name:'телефон самсунг', price: 2500, rating: 5, img: '#', type: 1, brand: 1},
            {id: '1', name:'телефон самсунг', price: 2500, rating: 5, img: '#', type: 1, brand: 1},
            {id: '1', name:'телефон самсунг', price: 2500, rating: 5, img: '#', type: 1, brand: 1},
            {id: '1', name:'телефон самсунг', price: 2500, rating: 5, img: '#', type: 1, brand: 1},
            {id: '1', name:'телефон самсунг', price: 2500, rating: 5, img: '#', type: 1, brand: 1},

        ]
        this._selectedType = {}
        this._selectedBrand = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this.setPage(1)
        this._selectedBrand = brand
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}
