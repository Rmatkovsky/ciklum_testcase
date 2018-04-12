import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import routes from '../../constants/routes.constatnt';

class MenuCategoryComponent extends PureComponent {
    render() {
        const { categories } = this.props;

        return (
            <div className="span3">
                <div className="well sidebar-nav">
                    <ul className="nav nav-list">
                        <li className="nav-header">Categories</li>
                        {
                            categories.map(category => (
                                <li key={category.id}>
                                    <NavLink
                                      activeClassName="active"
                                      to={routes.category.item(category.id)}
                                    >
                                        {category.name}
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

MenuCategoryComponent.defaultProps = {
    categories: [],
};

MenuCategoryComponent.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
    categories: state.common.categories,
});

export default connect(mapStateToProps, {})(MenuCategoryComponent);

