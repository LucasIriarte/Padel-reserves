import React, { useEffect, useState } from "react";
import AsideReservation from "../AsideReservation/AsideReservation";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getBooking } from "../../redux/bookingActions";
import { getShedules } from "../../redux/shedulesActions";



export const TableReservations = () => {
    const booking = useSelector((state)=> state.booking.booking)
    const shedules = useSelector((state) => state.shedules.shedules)
    console.log(booking)
    const [makeReserve, setMakeReserve] = useState(false)
    const [hourReserve, setHourReserve] = useState("")
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getBooking())
        dispatch(getShedules())
    },[])
    const handleDateAdvance = () => {
        dispatch(getBooking({
            payload:"advance",
            dateStand:booking
        }))
    }
    const handleDateBack = () => {
        dispatch(getBooking({
            payload:"back",
            dateStand:booking
        }))
    }

    const handlerMakeReserve = (e) => {
        setMakeReserve(!makeReserve)
        setHourReserve(e)
    }

    return (
        <>
            <div className="relative w-fit mx-auto">
                <div className="mx-auto justify-center pt-10 pb-2 flex ">
                    <MdOutlineArrowBackIos onClick={handleDateBack} className="h-8 w-8 text-primary-4 border-primary-5 border-y border-l"/>
                    <span className="h-8 text-primary-4 text-3xl border border-primary-5 flex justify-center items-center px-3">{booking}</span>
                    <MdOutlineArrowForwardIos onClick={handleDateAdvance} className="h-8 w-8 text-primary-4 border-y border-r border-primary-5"/>
                </div>

                <table className="relative z-10">
                    <caption className="bg-slate-300 text-center font-bold h-12">Cancha padel</caption>
                    <tbody className="border-collapse">
                        {
                            shedules.map(appointment => <tr key={appointment}>
                                <td className="h-14 w-16 text-center border border-b-slate-300">{appointment}</td>
                                <td className="border border-b-slate-300 w-64 h-14"> <button className="bg-fuchsia-600 w-full h-14" onClick={(e) => handlerMakeReserve(appointment)}>espacio disponible</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {makeReserve && <AsideReservation hourReserve={hourReserve} onClose={() => setMakeReserve(false)}/>}
        </>
    )
}