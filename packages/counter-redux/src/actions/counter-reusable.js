import { INCREMENT_REUSABLE, DECREMENT_REUSABLE } from '../constants/counter-reusable';

export const increment = (name) => ({ name, type: INCREMENT_REUSABLE });
export const decrement = (name) => ({ name, type: DECREMENT_REUSABLE });
