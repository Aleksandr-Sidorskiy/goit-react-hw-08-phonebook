import { createSlice } from "@reduxjs/toolkit";
// import storage from "redux-persist/lib/storage";
// import { persistReducer } from "redux-persist";

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: { filter:'' },
    reducers: {
        
         setFilter (state, {payload}) {
            state.filter = payload;
        },
    }
});

export const { setFilter } = contactsSlice.actions;
export default contactsSlice;
// const persistConfig = {
//     key: 'contacts',
//     storage,
//     blacklist: ['filter'],
// };

// export const persisteContactReducer = persistReducer(
//   persistConfig,
//   contactsSlice.reducer,
// );


// export const getContacts = state => state.contacts.items;
// export const getFilter = state => state.contacts.filter;
