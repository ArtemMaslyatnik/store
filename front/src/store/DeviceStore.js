import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
        ]
        this._brands = [
        ]
        this._devices = [
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        this._offset = 0
        this._totalCount = 0
        this._limit = 5
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
        this.setOffset(0)
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this.setOffset(0)
        this._selectedBrand = brand
    }
    
    setOffset(offset) {
        this._offset = offset
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
    get limit() {
        return this._limit
    }
    get offset() {
        return this._offset
    }
}
