import {$authHost} from "./index";

export const fetchUserBasket = async (id) => {
    const {data} = await $authHost.get('api/basket/' + id)
    return data
}
