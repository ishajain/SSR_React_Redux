/* eslint-disable no-underscore-dangle */
import {  createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import { getUserData } from '../actions';

export const  fetchingUserData = () =>  ({ dispatch,getState }) => {
    console.log("CURRENT STATE:",  getState());
    return [dispatch(getUserData())];
};

const preloadedState = {};
// const reduxDevTools =
//     window.__REDUX_DEVTOOLS_EXTENSION__ &&
//     window.__REDUX_DEVTOOLS_EXTENSION__();
const composeEnhancers = (typeof window !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;

const middlewares = [thunk];

export const storeWithMiddleware = composeEnhancers(applyMiddleware(...middlewares))(createStore);

export const store = (storeWithMiddleware(reducers,preloadedState));

// export const store = createStore(reducers, preloadedState, composeEnhancers(
//     applyMiddleware(...middlewares)
// ));