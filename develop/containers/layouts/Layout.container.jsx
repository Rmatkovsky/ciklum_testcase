import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { getCategories } from '../../actions/common.actions';

import MenuCategoryComponent from '../../components/common/MenuCategory';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

import '../../assets/stylesheets/index.sass';

class Layout extends Component {
    componentWillMount() {
        const { handleGetCategories } = this.props;

        handleGetCategories();
    }

    render() {
        const { children } = this.props;

        return (
            <div className="app-layout">
                <Header />
                <div className="container-fluid">
                    <div className="row-fluid">
                        <MenuCategoryComponent />
                        {React.cloneElement(children)}
                    </div>
                    <hr />
                    <Footer />
                </div>
            </div>
        );
    }
}

Layout.propTypes = {
    children: PropTypes.object.isRequired,
    handleGetCategories: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    user: state.user,
});

const mapDispatchToProps = dispatch => ({
    handleGetCategories: bindActionCreators(getCategories, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));
