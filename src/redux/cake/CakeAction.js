import {BUY_CAKE} from './CakeTypes'
import { ADD_CAKE } from './CakeTypes'

export const buyCake = (number = 1) => {
    return {
        type : BUY_CAKE,
        payload: number
    }
}



export const addCake = (number1 = 1) => {
    return {
        type : ADD_CAKE,
        payload: number1
    }
}