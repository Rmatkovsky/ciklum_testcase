import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LoginPage from '../../components/pages/common/Login.page';

import { loginedUser } from '../../actions/user.actions';

class LoginContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(formData) {
        const { handleLoginedUser } = this.props;

        handleLoginedUser(formData);
    }

    render() {
        const { user } = this.props;

        return (
            <LoginPage
              user={user}
              onSubmit={this.handleSubmit}
            />
        );
    }
}

LoginContainer.propTypes = {
    user: PropTypes.object.isRequired,
    handleLoginedUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    user: state.user,
});

const mapDispatchToProps = dispatch => ({
    handleLoginedUser: bindActionCreators(loginedUser, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
