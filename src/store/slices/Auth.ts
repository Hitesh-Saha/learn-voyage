// import type {PayloadAction} from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

type Auth = {
    isLoggedIn: boolean,
    token: string,
}

const initialState: Auth = {
    isLoggedIn: false,
    token: '',
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        getAuthentication: (state: any) => {
            state.isLoggedIn = true;
        }
    },
})

export const {
    getAuthentication,
} = authSlice.actions

export default authSlice.reducer