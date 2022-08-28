// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { configureStore } from '@reduxjs/toolkit';
// import { contactApi } from './contactApi';
// import  {contactsSlice}  from './contactsSlice';


import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
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
import storage from 'redux-persist/lib/storage';
import { todosReducer } from './todos';
import { authReducer } from './auth';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    todos: todosReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);




//=============== Стор дз 7 ======================
// export const store = configureStore({
//   reducer: {
//     [contactApi.reducerPath]: contactApi.reducer,
//     contacts: contactsSlice.reducer,
//   },
//   middleware:getDefaultMiddleware => [
//     ...getDefaultMiddleware(),
//     contactApi.middleware, 
//    ]
// });


