import {useDispatch} from "react-redux";
import {useMemo} from "react";
import {bindActionCreators} from "@reduxjs/toolkit";
import {actions} from '../store/favorites/favorites.slice.ts'
import * as userActions from "../store/user/user.slice.ts";

const rootActions ={
    ...actions,
    ...userActions,
}

export const useActions = () => {
    const dispatch = useDispatch()

    return useMemo(()=>bindActionCreators(rootActions,dispatch),[dispatch])
}