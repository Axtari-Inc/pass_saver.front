import {combineReducers, createStore} from "redux";
import {
    configureStore,
    createAction,
    createReducer,
    createSlice,
} from "@reduxjs/toolkit";


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
        }, {
            id: 3,
            img: 'https://cdnb.artstation.com/p/assets/images/images/003/638/701/large/yusif-alomeri-dota-emoticons-icon-circle.jpg?1475880618',
            title: 'title3'
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

export const {saveDragStartElement, removeDragStartElement, updateStore} = startSlice.actions