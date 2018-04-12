import api from '../api/config';

import {
    GET_CATEGORIES,
} from './types/categories.types';

import {
    request,
    success,
    failure,
} from '../utils/actions.helper';

export const getCategories = () => (dispatch) => {
    dispatch(request(GET_CATEGORIES));
    api.common.getCategories().then(
        response => dispatch(success(GET_CATEGORIES, response.data)),
        err => dispatch(failure(GET_CATEGORIES, err)),
    );
};
