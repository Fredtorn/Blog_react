import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import { useAuth } from "./AuthContext";

const PrivateRoutes = () => {
    const { userLoggedIn } = useAuth();

    return userLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
