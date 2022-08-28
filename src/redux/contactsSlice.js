import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    filter: '' ,
}

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState ,
    reducers: {
        
         setFilter (state, {payload}) {
            state.filter = payload;
        },
    }
});

export const { setFilter } = contactsSlice.actions;

