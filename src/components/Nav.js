import React from "react";
import logo from '../assets/logo.png';

const Nav = () => {
    return(
        <div className="w-full h-1/6 flex items-center justify-between p-4">
            <a href="" ><img src={logo} className="w-16" alt="logo"/></a>
            <div className="w-2/6 flex items-center justify-evenly">
                <a href="#" ><p className="text-xs font-thin">About</p></a>
                <a href="#" ><p className="text-xs font-thin">How to?</p></a>
                <a href="#" ><p className="text-xs font-thin">Docs</p></a>
            </div>
        </div>
    )
}

export default Nav;