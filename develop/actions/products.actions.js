import api from '../api/config';
import {
    createAction,
    success,
    failure,
    request,
} from '../utils/actions.helper';

import {
    GET_PRODUCTS,
    SEARCH_PRODUCTS,
    CLEAR_PRODUCT_DATA_STATE,
} from './types/products.types';

import normalizr from '../utils/mappers/product.mapper';

/**
 * get Products
 * @param params
 * @returns {function(*)}
 */
export const getProducts = params => (dispatch) => {
    dispatch(request(GET_PRODUCTS));
    api.product.getAll().then(
        (response) => {
            /** backend business logic */
            if (params && params.categoryId) {
                response.data = response.data.filter(item => item.category === +params.categoryId);
            }
            const nData = normalizr.res.getProducts(response.data);
            dispatch(success(GET_PRODUCTS, nData));
        },
        error => dispatch(failure(GET_PRODUCTS, error)),
    );
};

/**
 * search Products
 * @param params
 * @returns {function(*)}
 */
export const searchProducts = params => (dispatch) => {
    dispatch(request(SEARCH_PRODUCTS));
    api.product.getAll().then(
        (response) => {
            /** backend business logic */
            if (params && params.categoryId) {
                response.data = response.data.filter(item => item.category === +params.categoryId);
            }
            if (params && params.search) {
                response.data = response.data.filter(item => item.name.indexOf(params.search) !== -1);
            }
            const nData = normalizr.res.getProducts(response.data);
            dispatch(success(SEARCH_PRODUCTS, nData));
        },
        error => dispatch(failure(SEARCH_PRODUCTS, error)),
    );
};

/**
 * Clear state products
 * @returns {*}
 */
export const clearDataState = () => createAction(CLEAR_PRODUCT_DATA_STATE);
