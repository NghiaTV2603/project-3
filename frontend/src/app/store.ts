import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
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
import authSlice from '../features/authen/authSlice';
import serverSlice from '../features/home/serverSlice';
import channelSlice from '../features/home/channelSlice';
import messageSlice from '../features/message/messageSlice';

const persistConfig = {
   key: 'root',
   version: 1,
   storage,
   whitelist: ['auth'],
};

const rootReducer = combineReducers({
   auth: authSlice.reducer,
   server: serverSlice.reducer,
   channel: channelSlice.reducer,
   message: messageSlice.reducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
   reducer: persistedReducer,
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
         },
      }),
});
export const persistor = persistStore(store);
// eslint-disable-next-line import/prefer-default-export
// export const store = configureStore({
//    reducer: {
//       auth: authSlice.reducer,
//       server: serverSlice.reducer,
//       channel: channelSlice.reducer,
//       message: messageSlice.reducer,
//    },
// });

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
