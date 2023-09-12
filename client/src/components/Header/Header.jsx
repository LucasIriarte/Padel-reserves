import React from "react";
import img from "/IconPadel.png";


function Header(){
    return (
        <nav>
            <div className="h-16 w-16">
                <img src={img} alt="Icono padel" className="w-full"/>
            </div>
        </nav>
    )
}

export default Header