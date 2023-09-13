import React from "react";
import { Navigate } from "react-router-dom";
import Preloader from "../Preloader/Preloader";

  export default function ProtectedRoute({ loggedIn, children, isLoading }) {
    if(isLoading) {
        return <Preloader/>
    }
    return (
        <>
           
            {  !loggedIn ? <Navigate to="/" replace /> : children}
        </>
    )
}