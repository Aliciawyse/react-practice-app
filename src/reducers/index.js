import { combineReducers } from 'redux';
import TargetReducer from './target-reducer';

const reducers = {
    targetStore: TargetReducer
}

const rootReducer = combineReducers(reducers);

export default rootReducer;