import { contactApi } from './contactApi';
import {contactsSlice}  from './contactsSlice';
import { configureStore } from '@reduxjs/toolkit';
import { persisteAuthReducer } from './auth/auth-slice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    auth: persisteAuthReducer,
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: getDefaultMiddleware => [
     ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
       }, 
     }),
    contactApi.middleware, 
  ],
});

export const persistor = persistStore(store);





