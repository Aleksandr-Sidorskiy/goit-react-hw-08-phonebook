import { contactApi } from './contactApi';
import {contactsSlice}  from './contactsSlice';
import { configureStore } from '@reduxjs/toolkit';
// import { persisteAuthReducer } from './auth/auth-slice';
import { authSlice } from './auth/auth-slice';
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    auth: persistReducer(authPersistConfig, authSlice.reducer),
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





