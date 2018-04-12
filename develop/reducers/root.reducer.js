import { combineReducers } from 'redux';

import { reducer as form } from 'redux-form';
/**
 * Reducers
 */
import user from './user.reducer';
import common from './common.reducer';
import product from './product.reducer';

const rootReducer = combineReducers({
    user,
    common,
    product,
    form,
});

export default rootReducer;
