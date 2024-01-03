import React, { useEffect } from "react";
import Header from "../Header/Header";
import Banner from "/public/Banner.jpeg";
import { useDispatch, useSelector } from "react-redux";


function Home() {
    const allReserves = useSelector((state) => state.reserves)
    console.log(allReserves);
    return (
        <>
            <Header />
            <div>
                <img src={Banner} alt="" />
            </div>
            <h2>Reserva tu turno!</h2>

        </>
    )
}

export default Home