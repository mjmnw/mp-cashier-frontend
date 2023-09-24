import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: 0,
    username: "",
    fullname: "",
    email: "",
    birthdate: "",
    profile_picture: "",
    gender: "",
    status: "",
    role: "",
};

const authReducer = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.id = action.payload.id;
            state.username = action.payload.username;
            state.fullname = action.payload.fullname;
            state.email = action.payload.email;
            state.birthdate = action.payload.birthdate;
            state.profile_picture = action.payload.profile_picture;
            state.gender = action.payload.gender;
            state.status = action.payload.status;
            state.role = action.payload.role;
        },
        logout: () => {
            return initialState;
        },
    },
});

export const { login, logout } = authReducer.actions;

export default authReducer.reducer;
