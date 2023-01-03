import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Content/images/logo.png";
import Search from "./Search";

const Header = () => {
    return (
        <header className="bg-[#182131] w-full text-white">
            <div className="container mx-auto">
                <div className="header-inner flex items-center gap-3 relative p-4">
                    <div className="logo lg:absolute z-20">
                        <Link reloadDocument to={"/MovieSearchApp/"}>
                            <img src={Logo} alt="Logo" />
                        </Link>
                    </div>
                    <div className="search-wrapper flex justify-center w-full">
                        <Search />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;