import React from "react";
import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";
import Home from "../Pages/Home";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import PlantDetails from "../Pages/PlantDetails";
import Profile from "../Pages/Profile";
import AllPlants from "../Pages/AllPlants";
import PrivateRouter from "../AuthContext/PrivateRouter";
import ResetPassword from "../Pages/ResetPassword";
import Loading from "../Components/Loading";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayouts></HomeLayouts>,
        children: [
            {
                index: true,
                path: "/",
                hydrateFallbackElement: <Loading></Loading>,
                loader: () => fetch("/plants.json"),
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/signup",
                element: <Signup></Signup>,
            },
            {
                path: "/plant-details/:id",
                hydrateFallbackElement: <Loading></Loading>,
                loader: () => fetch("/plants.json"),
                element: (
                    <PrivateRouter>
                        <PlantDetails></PlantDetails>
                    </PrivateRouter>
                ),
            },
            {
                path: "/profile",
                element: (
                    <PrivateRouter>
                        <Profile></Profile>
                    </PrivateRouter>
                ),
            },
            {
                path: "/plants",
                hydrateFallbackElement: <Loading></Loading>,
                loader: () => fetch("/plants.json"),
                element: <AllPlants></AllPlants>,
            },
            {
                path: "/reset-password",
                element: <ResetPassword></ResetPassword>,
            },
        ],
    },
    {
        path: "/*",
        element: <ErrorPage></ErrorPage>,
    },
]);

export default router;
