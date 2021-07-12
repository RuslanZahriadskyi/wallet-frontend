// import React from 'react';
// import { Redirect, Route } from 'react-router';
// import {useSelector} from "react-redux";
// import authSelectors  from "../redux/auth";

// export default function PrivateRouter({ children, redirectTo, isAuthenticated, ...routeProps}) {
//     const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
//   return (
//     <Route {...routeProps}>
//       {isLoggedIn ? children : <Redirect to={redirectTo}/>}
//     </Route>
//   );
// }
