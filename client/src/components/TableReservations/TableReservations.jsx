import React, { useState } from "react";
import AsideReservation from "../AsideReservation/AsideReservation";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";



export const TableReservations = () => {
    const hours = []
    const [makeReserve, setMakeReserve] = useState(false)
    const [hourReserve, setHourReserve] = useState("")
    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()
    for (let i = 9; i <= 23; i++) {
        i == 9 ? hours.push([`0${i}:00`, `0${i}:30`]) : i == 23 ? hours.push([`${i}:00`]) : hours.push([`${i}:00`, `${i}:30`])
    }

    const handlerMakeReserve = (e) => {
        setMakeReserve(!makeReserve)
        setHourReserve(e)
    }

    return (
        <>
            <div className="relative w-fit mx-auto">
                <div className="mx-auto justify-center pt-10 pb-2 flex ">
                    <MdOutlineArrowBackIos className="h-8 w-8 text-primary-4 border border-primary-5"/>
                    <span className="h-8 text-primary-4 text-3xl border border-primary-5 flex justify-center items-center px-3">{`${day}/${month}/${year}`}</span>
                    <MdOutlineArrowForwardIos className="h-8 w-8 text-primary-4 border border-primary-5"/>
                </div>

                <table className="relative z-10">
                    <caption className="bg-slate-300 text-center font-bold h-12">Cancha padel</caption>
                    <tbody className="border-collapse">
                        {
                            hours.flat().map(appointment => <tr key={appointment}>
                                <td className="h-14 w-16 text-center border border-b-slate-300">{appointment}</td>
                                <td className="border border-b-slate-300 w-64 h-14"> <button className="bg-fuchsia-600 w-full h-14" onClick={(e) => handlerMakeReserve(appointment)}>espacio disponible</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {makeReserve && <AsideReservation hourReserve={hourReserve} onClose={() => setMakeReserve(false)} />}
        </>
    )
}