import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import { requiredCustom } from '../../../utils/validation.helper';
import FormInput from '../../../components/form/FormInput';

class LoginPage extends Component {
    render() {
        const {
            user,
            handleSubmit,
        } = this.props;

        return (
            <div className="container">
                <form className="form-signin">
                    <h2 className="form-signin-heading">Please login</h2>
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <Field
                      name="name"
                      type="text"
                      maxLength={256}
                      component={FormInput}
                      customErrors={user.errorData.email}
                      placeholder="Username or email"
                      validate={[
                          requiredCustom('Please enter username or email'),
                      ]}
                    />

                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <Field
                      type="password"
                      name="password"
                      maxLength={256}
                      component={FormInput}
                      placeholder="Password"
                      customErrors={user.errorData.password}
                      validate={[
                          requiredCustom('Please enter your password'),
                      ]}
                    />
                    <button className="btn btn-large btn-primary" type="submit" onClick={handleSubmit}>Login</button>
                </form>
            </div>
        );
    }
}


LoginPage.propTypes = {
    user: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
};

const initializeForm = reduxForm({
    form: 'login',
})(LoginPage);

export default initializeForm;
