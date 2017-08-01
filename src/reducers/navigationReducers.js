import {initialState} from './initialState'

export const reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case 'test':{
            console.log("start test reducer")
             return {
                navigation : payload
            };
            break;
        }
    }
    console.log("return default state in reducers")
    return state;

};
export default reducer

