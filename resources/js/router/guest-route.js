import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

function GuestRoute ({ component: Component, title, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => <Component {...props} />}
    />
  );
};

GuestRoute.displayName = 'Guest Route';

GuestRoute.propTypes = {
  component: PropTypes.func.isRequired,
  rest: PropTypes.object,
  location: PropTypes.object,
  title: PropTypes.string
};

export default GuestRoute;
