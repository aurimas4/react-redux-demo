import { INCREMENT_REUSABLE_ARRAY, DECREMENT_REUSABLE_ARRAY } from '../constants/counter-reusable-array';

export default (state = {}, action) => {
    switch (action.type) {
        case INCREMENT_REUSABLE_ARRAY: {
            const currentValue = typeof state[action.name] !== 'undefined' ? state[action.name] : 0;

            return {
                ...state,
                [action.name]: (currentValue + 1)
            };
        }

        case DECREMENT_REUSABLE_ARRAY: {
            const currentValue = typeof state[action.name] !== 'undefined' ? state[action.name] : 0;

            return {
                ...state,
                [action.name]: (currentValue - 1)
            };
        }

        default:
            return state;
    }
}