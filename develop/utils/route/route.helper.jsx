import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

export const RouteWithLayout = ({ layout, component, ...rest }) => ((
    <Route {...rest} render={props => React.createElement(layout, props, React.createElement(component, props))} />
));

RouteWithLayout.propTypes = {
    layout: PropTypes.func.isRequired,
    component: PropTypes.func.isRequired,
};
