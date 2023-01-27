import {combineReducers, createStore} from "redux";
import {configureStore, createAction, createReducer, createSlice, PayloadAction} from "@reduxjs/toolkit";


const defaultState = {
    count: 5
}

const action1 =createAction('SWITCH_COUNT');


const startSlice = createSlice({
    name: 'toolkit',
    initialState: {count:0},
    reducers: {
        increment(state,action){
            state.count=action.payload;
        }
    }
})

const rootReducer = combineReducers({
    toolkit: startSlice.reducer
})

 export const store = configureStore({
     reducer: rootReducer,
 })
export const {increment} = startSlice.actions