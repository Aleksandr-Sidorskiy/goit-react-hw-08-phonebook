import { configureStore } from '@reduxjs/toolkit';
import { contactApi } from './contactApi';
import  {contactsSlice}  from './contactsSlice';



export const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
    contacts: contactsSlice.reducer,
  },
  middleware:getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactApi.middleware, 
   ]
});


