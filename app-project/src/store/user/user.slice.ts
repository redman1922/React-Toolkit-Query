import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getUserById} from "./users.actions.ts";
import {IInitialUserState, IUser} from "../../types/user.types.ts";

const initialState:IInitialUserState = {
    isLoading: false,
    error: null,
    user: {} as IUser,
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getUserById.pending, state => {
            state.isLoading = true;
        })
        builder.addCase(getUserById.fulfilled, (state, action: PayloadAction<IUser>) => {
            state.isLoading = false;
            state.user = action.payload
        })

        builder.addCase(getUserById.rejected, (state, action: any) => {
            state.isLoading = false;
            state.error = action.payload.error
            state.user = {} as IUser
        })
    }
})