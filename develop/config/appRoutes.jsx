import React from 'react';

import { Switch } from 'react-router-dom';

import Layout from '../containers/layouts/Layout.container';
import SimpleLayout from '../containers/layouts/SimpleLayout.container';

import MainContainer from './../containers/main/Main.container';

import LoginContainer from '../containers/common/Login.container';
import ProfileContainer from '../containers/user/Profile.container';
import ProductsContainer from '../containers/products/Products.container';

import NoMatchPage from '../components/pages/common/NoMatch.page';

import { userIsAuthenticated } from '../utils/auth/auth.helper';
import { RouteWithLayout } from '../utils/route/route.helper';

export default (
    <Switch>
        <RouteWithLayout exact layout={Layout} name="Main" path="/" component={MainContainer} />
        <RouteWithLayout
          exact
          layout={Layout}
          name="Products list"
          path="/category/:categoryId"
          component={ProductsContainer}
        />
        <RouteWithLayout
          exact
          layout={Layout}
          name="Profile"
          path="/profile"
          component={userIsAuthenticated(ProfileContainer)}
        />
        <RouteWithLayout exact layout={SimpleLayout} name="Login" path="/login" component={LoginContainer} />
        <RouteWithLayout layout={SimpleLayout} component={NoMatchPage} />
    </Switch>

);
