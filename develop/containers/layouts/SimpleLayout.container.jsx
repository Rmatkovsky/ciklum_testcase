import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import '../../assets/stylesheets/index.sass';

class SimpleLayout extends Component {
    render() {
        const { children } = this.props;

        return (
            <div className="app-layout">
                {React.cloneElement(children)}
            </div>
        );
    }
}

SimpleLayout.propTypes = {
    children: PropTypes.object.isRequired,
    isAuthorized: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
    isAuthorized: state.user.isAuthorized,
});

export default withRouter(connect(mapStateToProps, {})(SimpleLayout));
