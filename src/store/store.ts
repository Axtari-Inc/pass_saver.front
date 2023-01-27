import {createStore} from "redux";

interface actionI {
    type:string,
    payload: number,
}
const action:actionI = {type: 'SWITCH_COUNT', payload: 0};
const defaultState = {
    count: 5
}
const reducer = (state = defaultState, action:actionI) => {
    switch (action.type) {
        case 'SWITCH_COUNT':
            // @ts-ignore
            return {...state,count: action.payload}
        default: return state
    }
}
 export const store = createStore(reducer)