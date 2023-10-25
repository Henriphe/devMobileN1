import {PayloadAction, createSlice } from "@reduxjs/toolkit";


interface UserState {
    user?:any;
}


const initialState: UserState = {
    user: undefined,
}

export const userSlice = createSlice({
    name: 'userReducee',
    initialState,
    reducers: {
        setUserAction: (state, action: PayloadAction<any>) => {
            state.user = action.payload
        },
    },
})

export const { setUserAction } = userSlice.actions;

export default userSlice.reducer;