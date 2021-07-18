import React from 'react';
import { Redirect, Route } from 'react-router';
import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth';

export default function PrivateRouter({ children, ...routeProps }) {
  const isToken = useSelector(authSelectors.getToken);
  return (
    <Route {...routeProps}>
      {Boolean(isToken) ? children : <Redirect to="/login" />}
    </Route>
  );
}
