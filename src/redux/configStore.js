import {combineReducers, createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import AdxTypeReducer from './reducer/AdxTypeReducer'
import AdxDemoReducer from './reducer/AdxDemoReducer';

const rootReducer = combineReducers({
    AdxTypeReducer,
    AdxDemoReducer
})


export const store = createStore(rootReducer,applyMiddleware(thunk))