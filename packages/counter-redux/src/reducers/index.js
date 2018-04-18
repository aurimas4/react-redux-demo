import { combineReducers } from 'redux';

import counter from './counter';
import counterReusable from './counter-reusable';

function createFilteredReducer(reducerFunction, reducerPredicate) {
    return (state, action) => {
        const isInitializationCall = typeof state === 'undefined';
        const shouldRunWrappedReducer = reducerPredicate(action) || isInitializationCall;

        return shouldRunWrappedReducer ? reducerFunction(state, action) : state;
    }
}

export default combineReducers({
    counter,
    counterA: createFilteredReducer(counterReusable, action => action.name === 'A'),
    counterB: createFilteredReducer(counterReusable, action => action.name === 'B'),
});