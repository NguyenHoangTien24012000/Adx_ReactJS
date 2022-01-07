import {combineReducers, createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import AdxTypeReducer from './reducer/AdxTypeReducer'

const rootReducer = combineReducers({
    AdxTypeReducer,
})


export const store = createStore(rootReducer,applyMiddleware(thunk))