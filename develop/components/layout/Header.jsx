import React, { Component } from 'react';

import cl from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { userLogout } from '../../actions/user.actions';
import routes from '../../constants/routes.constatnt';

class Header extends Component {
    constructor() {
        super();

        this.state = {
            openDropdown: false,
        };
        this.handleToggleDropdown = this.handleToggleDropdown.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        const { handleUserLogout } = this.props;

        handleUserLogout();
    }

    handleToggleDropdown() {
        const { openDropdown } = this.state;

        this.setState({ openDropdown: !openDropdown });
    }

    render() {
        const { user, isAuthorized } = this.props;
        const { openDropdown } = this.state;
        const classNameDropdown = cl('btn-group pull-right', {
            open: openDropdown,
        });

        return (
            <div className="navbar navbar-fixed-top">
                <div className="navbar-inner">
                    <div className="container-fluid">
                        <a className="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </a>
                        <NavLink to="/" className="brand">Ex OLX project</NavLink>
                        {
                            isAuthorized ?
                                <div className={classNameDropdown} onClick={this.handleToggleDropdown}>
                                    <a className="btn dropdown-toggle" data-toggle="dropdown">
                                        <i className="icon-user" /> {user.name}
                                        <span className="caret" />
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><NavLink to={routes.user.profile()}>Profile</NavLink></li>
                                        <li className="divider" />
                                        <li><a onClick={this.handleLogout}>Sign Out</a></li>
                                    </ul>
                                </div>
                                : <div className={classNameDropdown}>
                                    <NavLink className="btn" to={routes.auth.login()}>Login</NavLink>
                                </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}


Header.propTypes = {
    user: PropTypes.object.isRequired,
    isAuthorized: PropTypes.bool.isRequired,
    handleUserLogout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    user: state.user.payload,
    isAuthorized: state.user.isAuthorized,
});

const mapDispatchToProps = dispatch => ({
    handleUserLogout: bindActionCreators(userLogout, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
