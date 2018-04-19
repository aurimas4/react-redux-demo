import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILED } from '../constants/products';

const initialState = {
    products: [],
    loading: false,
    error: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            };

        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload.products,
                loading: false,
                error: false,
            };

        case FETCH_PRODUCTS_FAILED:
            return {
                ...state,
                products: [],
                loading: false,
                error: false,
            };

        default:
            return state;
    }
}
