import { configureStore } from '@reduxjs/toolkit';
// import contacts from './contactsSlice';
// import filter from './filter';
import { persisteContactReducer } from './contactsSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { contactApi } from './contactApi';
// ++++++++++++++++++++pokemon+++++++++++++++++++++++
import { pokemonApi } from './pokemonSlice';


export const store = configureStore({
  reducer: {
    contacts: persisteContactReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware:(getDefaultMiddleware) => [
   ...getDefaultMiddleware(
     {
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
     }
    ), pokemonApi.middleware,
      contactApi.middleware,
    
   ]
});

export const persistor = persistStore(store);

