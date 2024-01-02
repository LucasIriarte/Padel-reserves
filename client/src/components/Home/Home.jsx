import React from "react";
import Header from "../Header/Header";
import Banner from "/public/Banner.jpeg";
import { useDispatch } from "react-redux";
import { getReserves } from "../../redux/actions.jsx"


function Home(){
    const dispatch = useDispatch()
    dispatch(getReserves())
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