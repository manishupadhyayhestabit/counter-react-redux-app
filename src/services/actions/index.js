import {increment, decrement} from '../constants'

export const incrementHandler = ()=>{
    return{
        type:increment
    }
}

export const decrementHandler = ()=>{
    return{
        type:decrement
    }
}