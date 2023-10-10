import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated', // autenticado o no autenticado o revisando 
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null,
    },
    reducers: {
        login: (state, {payload}) => {
            state.status = 'authenticated', // autenticado o no autenticado o revisando 
            state.uid = payload.uid;
            state.email= payload.email;
            state.displayName= payload.displayName;
            state.photoURL= payload.photoURL;
            state.errorMessage= null;
        },
        logOut: (state, {payload}) => {
            state.status = 'not-authenticated', // autenticado o no autenticado o revisando 
            state.uid = null;
            state.email= null;
            state.displayName= null;
            state.photoURL= null;
            state.errorMessage= payload.errorMessage;

        },
        checkingCredentials: (state) => {
            state.status = 'checking';
        }
    }
});


// Action creators are generated for each case reducer function
export const { login, logOut, checkingCredentials } = authSlice.actions;