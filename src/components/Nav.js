import React from "react";
import logo from '../assets/logo.png';

const Nav = () => {
    return(
        <div className="w-full h-1/5 flex items-center justify-between p-4">
            <img src={logo} className="w-16" alt="logo"/>
            <div className="w-2/5 flex items-center justify-evenly">
                <p className="text-xs font-thin">About</p>
                <p className="text-xs font-thin">How to?</p>
                <p className="text-xs font-thin">Docs</p>
            </div>
        </div>
    )
}

export default Nav;