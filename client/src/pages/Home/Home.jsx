import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header.jsx";
import Banner from "/public/Banner.jpg";
import { TableReservations } from "../../components/TableReservations/TableReservations";
import Footer from "../Footer/Footer.jsx";
import { useSelector } from "react-redux";
import { Admin } from "../admin/Admin.jsx";


function Home() {
    const userDetails = useSelector((state) => state.users.userDetails)
    console.log(userDetails.admin)

    if (userDetails.admin) {
        return (
            <>
                <Admin />
            </>
        )
    }
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
                <div className="w-full">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13136.256790806689!2d-58.399323090306886!3d-34.60253811727183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1sen!2sar!4v1717088880103!5m2!1sen!2sar" className="w-3/4 mx-auto mt-10 h-80" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default Home