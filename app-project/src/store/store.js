import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {reducer as favoritesReducer} from "./favorites/favorites.slice";
import {userSlice} from "./user/user.slice";
import {api} from "./api/api";
import {createLogger} from "redux-logger/src";


const logger = createLogger({
    // collapsed: true,
})

const reducers = combineReducers({
    favorites:favoritesReducer,
    users: userSlice.reducer,
    [api.reducerPath]:api.reducer,
})

export const store = configureStore({
    reducer:reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware).concat(logger),
    devTools:true
})

