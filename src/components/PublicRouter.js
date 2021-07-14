// import React from 'react';
// import { Redirect, Route } from 'react-router';
// import { useSelector } from 'react-redux';
// import authSelectors from '../redux/auth';

// export default function PublicRouter({
//     isAuthenticated,
//     children,
//     redirectTo,
//     ...routeProps }) {
//   const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
// return (
//     <Route {...routeProps}>
//       {isLoggedIn && routeProps.restricted ? (
//         <Redirect to={redirectTo} />
//       ) : (
//         children
//       )}
//     </Route>
//   );
// }
