import { combineReducers } from 'redux';

import counter from './counter';
import counterReusable from './counter-reusable';
import counterReusableArray from './counter-reusable-array';

function createFilteredReducer(reducerFunction, reducerPredicate) {
    return (state, action) => {
        const isInitializationCall = typeof state === 'undefined';
        const shouldRunWrappedReducer = reducerPredicate(action) || isInitializationCall;

        return shouldRunWrappedReducer ? reducerFunction(state, action) : state;
    }
}

export default combineReducers({
    counter,
    counterReusableArray,
    counterA: createFilteredReducer(counterReusable, action => action.name === 'A'),
    counterB: createFilteredReducer(counterReusable, action => action.name === 'B'),
});