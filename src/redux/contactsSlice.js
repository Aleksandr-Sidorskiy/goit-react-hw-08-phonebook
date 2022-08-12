import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contacts: [],
}


export const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers:{
        setContacts: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { setContacts } = contactsSlice.actions;

export default contactsSlice.reducer;
