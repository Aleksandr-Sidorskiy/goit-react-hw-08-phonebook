import { createSlice } from "@reduxjs/toolkit";


export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: { filter: '' },
    reducers: {
        
         setFilter (state, {payload}) {
            state.filter = payload;
        },
    }
});

export const { setFilter } = contactsSlice.actions;

