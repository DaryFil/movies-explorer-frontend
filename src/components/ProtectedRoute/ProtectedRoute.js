import React from "react";
import { Navigate } from "react-router-dom";

// export const ProtectedRoute = ({ element: Component, ...props }) => {
//     return props.loggedIn ? (
//       <Component {...props} />
//     ) : (
//       <Navigate to="/" replace />
//     );
//   };
  export default function ProtectedRoute({ loggedIn, children, isLoading }) {
    return (
        <>
            {/* {isLoading ? <Preloader /> : loggedIn ? children : <Navigate to="/" replace />} */}
            {  !loggedIn ? <Navigate to="/" replace /> : children}
        </>
    )
}