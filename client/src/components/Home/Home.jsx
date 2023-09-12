import React from "react";
import Header from "../Header/Header";
import Banner from "/public/Banner.jpeg";

function Home(){
    return (
        <>
            <Header/>
            <div>
                <img src={Banner} alt="" />
            </div>
            <h2>Reserva tu turno!</h2>
            
        </>
    )
}

export default Home