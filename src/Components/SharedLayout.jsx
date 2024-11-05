import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";

const SharedLayout = () => {
    return (
        <>
        <Navbar />
        <Outlet />
        <Home />
        </>
    )
}

export default SharedLayout