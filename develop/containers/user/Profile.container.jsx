import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ProfilePage from '../../components/pages/user/Profile.page';

class ProfileContainer extends Component {
    render() {
        const { user } = this.props;
        return (
            <ProfilePage user={user} />
        );
    }
}

ProfileContainer.propTypes = {
    user: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    user: state.user.payload,
});

export default connect(mapStateToProps, {})(ProfileContainer);

