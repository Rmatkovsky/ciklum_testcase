import React, { Component } from 'react';

import PropTypes from 'prop-types';

class ProductsListComponent extends Component {
    render() {
        const { items } = this.props;
        return (
            <div>
                {
                    items.map(item => (
                        <div className="span4">
                            <h2>{item.name}</h2>
                            <p>price: {item.price}</p>
                            <p>color: {item.color}</p>
                            <p><a className="btn" href="#">View details &raquo;</a></p>
                        </div>
                    ))
                }
            </div>
        );
    }
}

ProductsListComponent.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductsListComponent;
