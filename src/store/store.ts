import {combineReducers, createStore} from "redux";
import {
    configureStore,
    createAction,
    createReducer,
    createSlice,
} from "@reduxjs/toolkit";
import {log} from "util";


const defaultState = {
    data: [
        {
            id: 1,
            img: 'https://w7.pngwing.com/pngs/244/820/png-transparent-games-gaming-squircle-world-of-tanks-wot-popular-games-icon.png',
            title: 'title1'
        }, {
            id: 2,
            img: 'https://w7.pngwing.com/pngs/244/820/png-transparent-games-gaming-squircle-world-of-tanks-wot-popular-games-icon.png',
            title: 'title2'
        }
    ],
    dragStartElement: null,
}


const startSlice = createSlice({
    name: 'toolkit',
    initialState: {...defaultState},
    reducers: {
        saveDragStartElement(state, action) {
            state.dragStartElement = action.payload;
        },
        removeDragStartElement(state) {
            state.dragStartElement = null;
        },
        updateStore(state,action){
          state.data = action.payload;
        }
    }
})

const rootReducer = combineReducers({
    toolkit: startSlice.reducer
})


export const store = configureStore({
    reducer: rootReducer,
})
store.subscribe(() => {
    const data = store.getState().toolkit.data;
    data.map(item=>console.log(`11111 ${item.id}`))
    console.log(`data in sub ${data}`)
    const sortData = data.sort((a,b)=>a.id-b.id);
    store.dispatch(updateStore(sortData));
})
export const {saveDragStartElement, removeDragStartElement, updateStore} = startSlice.actions