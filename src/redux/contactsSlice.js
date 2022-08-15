import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";


export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {items: [], filter: ''},
    reducers:{
        addContacts(state, { payload }) {
            state.items.push(payload);     
        },
        deleteContact(state, { payload }) {
            state.items = state.items.filter(item => item.id !== payload);
        },
         setFilter: (state, {payload}) => {
            state.filter = payload;
        },
    }
});

const persistConfig = {
    key: 'contacts',
    storage,
    blacklist: ['filter'],
};

export const persisteContactReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer,
);

export const { addContacts, deleteContact, setFilter } = contactsSlice.actions;

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
// export default contactsSlice.reducer;
