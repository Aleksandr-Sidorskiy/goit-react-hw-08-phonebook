// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import { contactApi } from './contactApi';
import  {contactsSlice}  from './contactsSlice';

// const persistConfig = {
//   key: 'root',
//   storage,
// }

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


