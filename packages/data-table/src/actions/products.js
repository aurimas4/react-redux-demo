import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILED } from '../constants/products';
import getProducts from '../get-products';

const fetchProductsRequest = () => ({ type: FETCH_PRODUCTS_REQUEST });
const fetchProductsSuccess = (products) => ({ type: FETCH_PRODUCTS_SUCCESS, payload: { products } });
const fetchProductsFailed = () => ({ type: FETCH_PRODUCTS_FAILED });

export const fetchProducts = filter => async (dispatch, getState) => {
    dispatch(fetchProductsRequest());

    try {
        const products = await getProducts(filter);

        await dispatch(fetchProductsSuccess(products));
    } catch (e) {
        await dispatch(fetchProductsFailed());
    }
};
