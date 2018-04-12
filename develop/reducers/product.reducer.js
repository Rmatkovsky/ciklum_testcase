import _isArray from 'lodash/isArray';

import {CLEAR_PRODUCT_DATA_STATE, GET_PRODUCTS, SEARCH_PRODUCTS} from '../actions/types/products.types';

const DEFAULT_STATE = {
    list: [],
    current: {},
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {

        case GET_PRODUCTS:
        case SEARCH_PRODUCTS:
            return getProducts(state, action);
        case CLEAR_PRODUCT_DATA_STATE:
            return clearDataState();

        default:
            return state;
    }
};

function getProducts(state, action) {
    const payload = _isArray(action.payload) ? action.payload : [];
    return {
        ...state,
        list: payload,
    };
}

function clearDataState() {
    return {
        ...DEFAULT_STATE,
    };
}
