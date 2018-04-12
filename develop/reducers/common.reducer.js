import _isArray from 'lodash/isArray';

import {
    GET_CATEGORIES,
} from '../actions/types/categories.types';

const DEFAULT_STATE = {
    categories: [],
    colors: ['Violet', 'Pink', 'Maroon', 'Mauv', 'Khaki'],
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {

        case GET_CATEGORIES:
            return getCategories(state, action);

        default:
            return state;
    }
};

function getCategories(state, action) {
    const payload = _isArray(action.payload) ? action.payload : [];
    return {
        ...state,
        categories: [...payload],
    };
}
