import { INCREMENT_REUSABLE, DECREMENT_REUSABLE } from '../constants/counter-reusable';

export default (state = 0, action) => {
    switch (action.type) {
        case INCREMENT_REUSABLE:
            return state + 1;

        case DECREMENT_REUSABLE:
            return state - 1;

        default:
            return state;
    }
}