import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../Loading/Loading";

function ProtectedRoute({ children }) {
    const { isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <Loading/>;
    }

    if (!isAuthenticated) {
        return <Navigate to="/" />;
    }

    return children;
}

export default ProtectedRoute;
