import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../Components/Footer";
import { Toaster } from "react-hot-toast";
import Loading from "../Components/Loading";

const HomeLayouts = () => {
    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";
    return (
        <div>
            <Toaster position="top-center" reverseOrder={false} />
            <Navbar></Navbar>

            {isLoading ? <Loading></Loading> : <Outlet></Outlet>}

            <Footer></Footer>
        </div>
    );
};

export default HomeLayouts;
