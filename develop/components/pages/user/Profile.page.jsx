import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProfilePage extends Component {
    render() {
        const { user } = this.props;
        return (
            <div className="container">
                <form className="form-signin">
                    <h2 className="form-signin-heading">Your cabinet</h2>
                    <label className="sr-only">Login</label>
                    <input value={user.login} />

                    <label className="sr-only">First name</label>
                    <input value={user.first_name} />

                    <label className="sr-only">Last name</label>
                    <input value={user.last_name} />

                    <label className="sr-only">phone</label>
                    <input value={user.phone} />

                    <label className="sr-only">Email</label>
                    <input value={user.email} />

                    <label className="sr-only">Gender</label>
                    <input value={user.gender} />
                </form>

            </div>
        );
    }
}

ProfilePage.propTypes = {
    user: PropTypes.object.isRequired,
};

export default ProfilePage;
