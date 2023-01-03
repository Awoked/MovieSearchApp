import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Loader from "../Components/Loader/Loader";

const Layout = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2100);
    }, []);

    return (
        <>
            {
                loading ? <Loader /> : null
            }
            <Header />
            <Outlet />
        </>
    )
}

export default Layout;