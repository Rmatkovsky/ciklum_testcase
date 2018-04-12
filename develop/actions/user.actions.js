import _findIndex from 'lodash/findIndex';

import api from '../api/config';
import {
    createAction,
    success,
    failure,
    request,
} from '../utils/actions.helper';

import {
    LOGIN_USER,
    USER_LOGOUT,
    CLEAR_USER_DATA_STATE,
} from './types/user.types';

import { handleReplace } from '../utils/history.helper';
import normalizr from '../utils/mappers/user.mapper';

/**
 * user login
 * @param params
 * @returns {function(*)}
 */
export const loginedUser = params => (dispatch) => {
    dispatch(request(LOGIN_USER));
    api.user.getAll().then(
        (response) => {
            /** backend buisness logic */
            const { data } = response;
            const indexUser = _findIndex(data, item => item.login === params.name && item.password === params.password)
            /** end some backend business logic */

            if (indexUser !== -1) {
                const nData = normalizr.res.userLoaded(data[indexUser]);
                dispatch(success(LOGIN_USER, nData));
                handleReplace({ pathname: '/' });
            } else {
                dispatch(failure(LOGIN_USER, { password: 'Wrong username or password' }));
            }
        },
        error => dispatch(failure(LOGIN_USER, error)),
    );
};


/**
 * user logout
 * @returns {function(*)}
 */
export const userLogout = () => (dispatch) => {
    dispatch(request(USER_LOGOUT));
};

export const clearDataState = () => createAction(CLEAR_USER_DATA_STATE);
