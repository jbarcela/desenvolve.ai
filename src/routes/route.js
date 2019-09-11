import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import AuthLayout from '~/pages/_layouts/auth';
import DefaultLayout from '../pages/_layouts/default';

const RouteWrapper = ({ component: Component, isPrivate, path, exact }) => {
  const isAuthed = false;

  if (!isAuthed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (isAuthed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  const Layout = isAuthed ? DefaultLayout : AuthLayout;

  return (
    <Route
      path={path}
      exact={exact}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool
};

RouteWrapper.defaultProps = {
  isPrivate: false,
  exact: false
};

export default RouteWrapper;
