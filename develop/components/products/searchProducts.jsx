import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { searchProducts } from '../../actions/products.actions';

class SearchProductsComponent extends Component {
    constructor() {
        super();

        this.state = {
            value: '',
        };

        this.handleSearch = this.handleSearch.bind(this);
        this.handleChangeValue = this.handleChangeValue.bind(this);
    }

    handleChangeValue(e) {
        this.setState({ value: e.target.value });
    }

    handleSearch(e) {
        const { categoryId, handleSearchProducts } = this.props;
        const { value } = this.state;

        e.preventDefault();
        handleSearchProducts({ categoryId, search: value });
    }

    render() {
        const { value } = this.state;
        return (
            <div className="well form-search">
                <input
                  className="input-medium search-query"
                  type="text"
                  value={value}
                  placeholder="Find your products"
                  onChange={this.handleChangeValue}
                />
                <button type="submit" className="btn" onClick={this.handleSearch}>Go</button>
            </div>
        );
    }
}

SearchProductsComponent.propTypes = {
    categoryId: PropTypes.object.isRequired,
    handleSearchProducts: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    products: state.product.list,
    common: state.common,
});

const mapDispatchToProps = dispatch => ({
    handleSearchProducts: bindActionCreators(searchProducts, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchProductsComponent);
