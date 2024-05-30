import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Banner from "/public/Banner.jpg";
import { TableReservations } from "../TableReservations/TableReservations";


function Home() {
    
        return (
            <div className="bg-slate-300">
                <Header />
                <div className="relative">
                    <div className="relative flex items-center justify-center mt-6">
                        <img src={Banner} alt="" />
                        <h1 className="absolute z-10 bg-black/[.3] w-full text-center text-slate-100 text-7xl font-bold py-2 backdrop-blur-md">Padel court</h1>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-center text-primary-5">Don`t miss your turn!</h2>
                    </div>
                    <TableReservations />
                </div>
            </div>
        )
}

export default Home