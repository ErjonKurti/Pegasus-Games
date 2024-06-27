// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';

// const PrivateRoute = ({ element: Element, ...rest }) => {
//   const isACMirage = rest.path === '/ac_mirage';
//   const isSAbove = rest.path === '/scars_above';
//   const isWHearts = rest.path === '/wild_hearts';

//   if (isACMirage || isSAbove || isWHearts) {
//     return <Route {...rest} element={<Navigate to="/" />} />;
//   }

//   return <Route {...rest} element={<Element />} />;
// };

// export default PrivateRoute;
