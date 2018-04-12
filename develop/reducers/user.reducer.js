import _isEmpty from 'lodash/isEmpty';
import _isObject from 'lodash/isObject';

import {
    LOGIN_USER,
    USER_LOGOUT,
    CLEAR_USER_DATA_STATE,
} from '../actions/types/user.types';

const INITIAL_STATE = {
    payload: {},
    isAuthorized: false,
    error: false,
    errorData: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case LOGIN_USER:
            return getUser(state, action);

        case CLEAR_USER_DATA_STATE:
        case USER_LOGOUT:
            return clearDataState();

        default:
            return state;
    }
};

function getUser(state, action) {
    if (_isEmpty(action.payload)) {
        return {
            ...state,
        };
    }
    return {
        ...state,
        payload: action.error ? state.payload : action.payload,
        error: action.error,
        errorData: action.error ? action.payload : false,
        meta: action.meta,
        isAuthorized: !_isObject(action.error) ? !action.error : false,
    };
}

function clearDataState() {
    return {
        ...INITIAL_STATE,
    };
}
