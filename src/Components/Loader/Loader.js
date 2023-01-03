import React from "react";

import Logo from "../../Content/images/logo.png";

const Loader = () => {
    return (
        <div className="w-screen h-screen fixed bg-black z-50 text-white">
            <div className="wrapper w-full flex-col gap-3 h-full text-center flex items-center justify-center">
                <img src={Logo} className="animate-bounce w-60" />
            </div>
        </div>
    )
}
export default Loader;