import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getProducts, clearDataState } from '../../actions/products.actions';

import ProductsListComponent from '../../components/products/productList';
import SearchProductsComponent from '../../components/products/searchProducts';


class ProductsListContainer extends Component {
    componentWillMount() {
        const {
            match: {
                params: {
                    categoryId,
                },
            },
            handleGetProducts,
        } = this.props;

        handleGetProducts({ categoryId });
    }

    componentWillReceiveProps(nextProps) {
        const { match: { params: { categoryId } }, handleGetProducts } = this.props;

        if (nextProps.match.params.categoryId !== categoryId) {
            handleGetProducts({ categoryId: nextProps.match.params.categoryId });
        }
    }

    componentWillUnmount() {
        const { handleClearDataState } = this.props;

        handleClearDataState();
    }

    render() {
        const {
            match: {
                params: {
                    categoryId,
                },
            },
            products,
        } = this.props;

        return (
            <div className="span9">
                <SearchProductsComponent categoryId={categoryId} />
                <ProductsListComponent items={products} />
            </div>
        );
    }
}

ProductsListContainer.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
    match: PropTypes.object.isRequired,
    handleGetProducts: PropTypes.func.isRequired,
    handleClearDataState: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    products: state.product.list,
    common: state.common,
});

const mapDispatchToProps = dispatch => ({
    handleGetProducts: bindActionCreators(getProducts, dispatch),
    handleClearDataState: bindActionCreators(clearDataState, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsListContainer);

