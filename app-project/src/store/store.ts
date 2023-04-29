import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {reducer as favoritesReducer} from "./favorites/favorites.slice.ts";
import {userSlice} from "./user/user.slice.ts";
import {api} from "./api/api.ts";


const reducers = combineReducers({
    favorites:favoritesReducer,
    users: userSlice.reducer,
    [api.reducerPath]:api.reducer,
})

export const store = configureStore({
    reducer:reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
    devTools:true
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

