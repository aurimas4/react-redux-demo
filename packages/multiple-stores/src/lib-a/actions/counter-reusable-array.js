import { INCREMENT_REUSABLE_ARRAY, DECREMENT_REUSABLE_ARRAY } from '../constants/counter-reusable-array';

export const increment = (name) => ({ name, type: INCREMENT_REUSABLE_ARRAY });
export const decrement = (name) => ({ name, type: DECREMENT_REUSABLE_ARRAY });
