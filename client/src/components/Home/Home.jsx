import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Banner from "/public/Banner.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { getAllReserves } from "../../redux/reservesActions";
import { TableReservations } from "../TableReservations/TableReservations";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../Loading/Loading";
import AsideReservation from "../AsideReservation/AsideReservation";


function Home() {
    const allReserves = useSelector((state) => state.reserves.reserves)
    const dispatch = useDispatch()
    const { user } = useAuth0()
    useEffect(() => {
        dispatch(getAllReserves("25022024"))
    }, [])
        return (
            <div>
                <Header />
                <div className="relative">
                    <div className="relative flex items-center justify-center mt-6">
                        <img src={Banner} alt="" />
                        <h1 className="absolute z-10 bg-black/[.3] w-full text-center text-slate-100 text-7xl font-bold py-2 backdrop-blur-md">Padel court</h1>
                    </div>
                    <TableReservations />
                    <h2>Reserva tu turno!</h2>
                </div>
            </div>
        )
}

export default Home