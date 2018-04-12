import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _isPlainObject from 'lodash/isPlainObject';
import _isString from 'lodash/isString';
import cl from 'classnames';
import { Tooltip } from 'react-bootstrap';

class FormInput extends Component {
    constructor(props) {
        super(props);

        this.handleBlur = this.handleBlur.bind(this);
    }

    handleBlur(context) {
        const { input: { onBlur }, handleBlur } = this.props;

        onBlur(context);
        if (handleBlur) {
            handleBlur();
        }
    }

    renderServerValidationErrors() {
        const {
            customErrors,
            meta: {
                touched,
                error,
                dirty,
                submitFailed,
            },
        } = this.props;
        const textError = error || customErrors;

        if ((touched && textError && dirty) || (submitFailed && textError)) {
            return (
                <Tooltip key={textError} placement="right" className="in" id="tooltip-right">{textError}</Tooltip>
            );
        }

        return null;
    }

    render() {
        const {
            input,
            type,
            className,
            handleFocus,
            disabled,
            handleKeyDown,
            ...rest
        } = this.props;

        return (
            <div className="app-input-group">
                <input
                  {...input}
                  type={type}
                  disabled={disabled}
                  onFocus={handleFocus}
                  onBlur={this.handleBlur}
                  onKeyDown={handleKeyDown}
                  className={className}
                  {...rest}
                />
                {
                    this.renderServerValidationErrors()
                }
            </div>
        );
    }
}

FormInput.defaultProps = {
    disabled: false,
    handleFocus: null,
    handleBlur: null,
    handleKeyDown: null,
    className: 'field',
    customErrors: '',
};

FormInput.propTypes = {
    input: PropTypes.object.isRequired,
    customErrors: PropTypes.string,
    type: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    handleFocus: PropTypes.func,
    handleBlur: PropTypes.func,
    handleKeyDown: PropTypes.func,
    disabled: PropTypes.bool.isRequired,
    meta: PropTypes.object.isRequired,
};

export default FormInput;
