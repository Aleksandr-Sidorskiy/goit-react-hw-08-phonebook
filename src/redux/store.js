import { configureStore } from '@reduxjs/toolkit';
// import contactSlice from './contactsSlice';
import filter from './filter';

// export const addContact = createAction('contact/addContact');
// export const deleteContact = createAction('contact/deleteContact')

// const clickAddContact = createReducer([], {
//     [addContact]: (state, action) => state.push(action.payload),
//     [deleteContact]: (state, action )=> state.filter(item => item.id !== action.payload),
// });

export const store =  configureStore({
    reducer: {
    // contactSlice,
      filter,
  },
})

