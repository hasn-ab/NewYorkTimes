import {applyMiddleware, createStore} from 'redux';
import rootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
const sagaMiddleware = createSagaMiddleware();

//create store with saga middleware
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
//always run after creating store
sagaMiddleware.run(rootSaga);
export type RootState = ReturnType<typeof store.getState>; // type of root reducer
// Infers types, will be used as typed-replacement of useDispatch()
export type AppDispatch = typeof store.dispatch;
export default store;
