import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProductsListComponent from '../../products/productList';

class MainPage extends Component {
    render() {
        const { products } = this.props;

        return (
            <div className="span9">
                <div className="hero-unit">
                    <h1>It is a test case</h1>
                    <p>npm i && npm start</p>
                </div>
                <ProductsListComponent items={products} />
            </div>
        );
    }
}

MainPage.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MainPage;
