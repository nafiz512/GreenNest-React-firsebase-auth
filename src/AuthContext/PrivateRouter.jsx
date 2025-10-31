import React, { use } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router";
import Loading from "../Components/Loading";

const PrivateRouter = ({ children }) => {
    const { user, loading } = use(AuthContext);
    if (loading) return <Loading></Loading>;
    if (user) return children;
    return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

export default PrivateRouter;
