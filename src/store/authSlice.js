import { createSlice } from "@reduxjs/toolkit";
//we can make post slice also as assignments
const initialState = {
    status: false,
    userData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    //yeh reducers hai
    //aur uske andar ke actions hai
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload;//or only action payload
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;

        }

    }
})

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
