import React, { useEffect } from "react";
import Header from "../Header/Header";
import Banner from "/public/Banner.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { getAllReserves } from "../../redux/reservesActions";


function Home() {
    const allReserves = useSelector((state) => state.reserves)
    const dispatch = useDispatch()
    const handler = () => {
        console.log(allReserves)
    }
    const handlerMutate = () => {
        dispatch(getAllReserves())
    }

    return (
        <>
            <Header />
            <div>
                <img src={Banner} alt="" />
            </div>
            <button onClick={handler}>mostrar Estado</button>
            <button onClick={handlerMutate}>Mutar ESTADO</button>
            <h2>Reserva tu turno!</h2>

        </>
    )
}

export default Home