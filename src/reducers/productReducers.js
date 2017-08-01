import {initialState} from './initialState'

export default function courseReducer(state = initialState.products, action) {
    const { type, payload } = action;
    switch(type) {
        case 'products':{
            console.log("start products reducer")
             return {
                products : payload
            };
            break;
        }
    }
    return state;

};

