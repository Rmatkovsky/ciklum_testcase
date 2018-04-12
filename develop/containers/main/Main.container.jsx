import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getProducts } from '../../actions/products.actions';

import MainPage from '../../components/pages/main/Main.page';

class MainContainer extends Component {
    componentWillMount() {
        const { handleGetProducts } = this.props;

        handleGetProducts();
    }

    render() {
        const { products } = this.props;

        return (
            <MainPage
              products={products}
            />
        );
    }
}

MainContainer.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
    handleGetProducts: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    products: state.product.list,
});

const mapDispatchToProps = dispatch => ({
    handleGetProducts: bindActionCreators(getProducts, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
