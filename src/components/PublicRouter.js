import React from 'react';
import { Redirect, Route } from 'react-router';
import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth';

export default function PublicRouter({ children, ...routeProps }) {
  const isToken = useSelector(authSelectors.getToken);
  return (
    <Route {...routeProps}>
      {Boolean(isToken) && routeProps.restricted ? (
        <Redirect to="/dashboard/home" />
      ) : (
        children
      )}
    </Route>
  );
}
