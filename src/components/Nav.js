import React from "react";
import logo from '../assets/logo.svg';

const Nav = () => {
    return(
        <div className="sm:justify-center w-full h-1/6 flex items-center p-6 md:justify-between">
            <a href=""><img src={logo} className="w-20 md:w-16 " alt="Spot-logo"/></a>
            <div className="w-2/6 flex items-center justify-evenly gap-x-4 hidden lg:flex md:flex">
                <a href="#" ><p className="text-sm hover:text-pink-600">About</p></a>
                <a href="#" ><p className="text-sm hover:text-pink-600">How to?</p></a>
                <a href="#" ><p className="text-sm hover:text-pink-600">Docs</p></a>
            </div>
        </div>
    )
}

export default Nav;