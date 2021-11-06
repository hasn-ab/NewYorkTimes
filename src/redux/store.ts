import {applyMiddleware, createStore} from 'redux';
import rootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['home'], // our branches which will be stored
};

const persistedReducer = persistReducer(persistConfig, rootReducer); //create persisted reducer with config
const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
const persistor = persistStore(store);
//always run after creating store
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>; // type of root reducer
// Infers types, will be used as typed-replacement of useDispatch()
export type AppDispatch = typeof store.dispatch;

export default store;
export {store, persistor};
