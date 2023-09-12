import React from "react";
import img from "/IconPadel.png"


export const Header = () => {
    return (
        <nav>
            <div className="h-16 w-16">
                <img src={img} alt="Icono padel" className="w-full"/>
            </div>
        </nav>
    )
}