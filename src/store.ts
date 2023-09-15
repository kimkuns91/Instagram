import {combineReducers, createStore, applyMiddleware} from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { TypeUserInfoReducer, userInfoReducer } from './reducers/userInfo';
import { TypeFeedListReducer, feedListRuducer } from './reducers/feedList';

const rootReducer =  combineReducers({
    userInfo: userInfoReducer,
    feedList: feedListRuducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk, logger))

export type RootReducer = {
    userInfo: TypeUserInfoReducer, 
    feedList: TypeFeedListReducer
}