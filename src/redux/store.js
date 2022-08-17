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
// ++++++++++++++++++++pokemon+++++++++++++++++++++++
import { pokemonApi } from './pokemonSlice';


export const store = configureStore({
  reducer: {
    contacts: persisteContactReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware:(getDefaultMiddleware) => [
   ...getDefaultMiddleware(
     {
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
     }
   ),pokemonApi.middleware,
   ]
});

export const persistor = persistStore(store);

