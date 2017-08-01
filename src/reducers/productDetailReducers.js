import {initialState} from './initialState'

export default function productDetailReducer(state = initialState.products, action) {
    const { type, payload } = action;
    switch(type) {
        case 'product':{
            console.log("start productDetail reducer")
             return {
                product : payload
            };
            break;
        }
        case 'price':{
            console.log("start price reducer")
             return {
                price : payload
            };
            break;
        }
    }
    return state;

};

