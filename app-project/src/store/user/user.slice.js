import {createSlice} from "@reduxjs/toolkit";
import {getUserById} from "./users.actions";

export const userSlice = createSlice({
    name:'users',
    initialState:{
        isLoading: false,
        error:null,
        user:{},
    },
    reducers:{},
    extraReducers:builder => {
        builder.addCase(getUserById.pending,state => {
            state.isLoading = true;
        })
        builder.addCase(getUserById.fulfilled,(state,action) => {
            state.isLoading = false;
            state.user = action.payload
        })

        builder.addCase(getUserById.rejected,(state,action) => {
            state.isLoading = false;
            state.error = action.payload.error
            state.user = {}
        })
    }
})