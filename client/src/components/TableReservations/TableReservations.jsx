import React, { useEffect, useState } from "react";
import AsideReservation from "../AsideReservation/AsideReservation";
import { useDispatch, useSelector } from "react-redux";
import { getBooking } from "../../redux/bookingActions";
import { getShedules } from "../../redux/shedulesActions";
import { getReservesDay } from "../../redux/reservesActions";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import { IoPersonCircleOutline } from "react-icons/io5";




export const TableReservations = () => {
    const booking = useSelector((state) => state.booking.booking)
    const reservesDay = useSelector((state) => state.reservesDay)
    const shedules = useSelector((state) => state.shedules.shedules)
    const [makeReserve, setMakeReserve] = useState(false)
    const [hourReserve, setHourReserve] = useState("")
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getBooking())
        dispatch(getShedules())
    }, [])
    useEffect(() => {
        dispatch(getReservesDay(booking));
    }, [booking])
    const handleDateAdvance = () => {
        dispatch(getBooking({
            payload: "advance",
            dateStand: booking
        }))
    }
    const handleDateBack = () => {
        dispatch(getBooking({
            payload: "back",
            dateStand: booking
        }))
    }

    const handlerMakeReserve = (e) => {
        setMakeReserve(!makeReserve)
        setHourReserve(e)
    }
    if (reservesDay.loading) {
        return <p>Loading...</p>;
    }

    if (reservesDay.error) {
        return <p>Error: {reservesDay.reservesDay.error}</p>;
    }
    return (
        <>
            <div className="relative w-fit mx-auto">
                <div className="mx-auto justify-center mt-10 pb-0 flex bg-white w-fit rounded-t-xl border-t border-l border-r border-slate-400">
                    <IoIosArrowDropleft onClick={handleDateBack} className="h-10 w-10 text-primary-4 border-primary-5" />
                    <span className="h-10 text-primary-4 text-3xl flex justify-center items-center px-3">{booking}</span>
                    <IoIosArrowDropright onClick={handleDateAdvance} className="h-10 w-10 text-primary-4" />
                </div>
                <div className="relative rounded-xl overflow-hidden border border-slate-400">
                    <table className="w-80 border-collapse bg-white">
                        <caption className="bg-white text-center font-bold h-12 text-4xl rounded-t-xl">Padel court</caption>
                        <tbody>
                            {
                                shedules.map((appointment) => {
                                    if(appointment === "23:00") {
                                        return null
                                    }
                                    return (
                                        <tr key={appointment} className="h-14">
                                            <td className="h-14 w-16 text-center border-t border-slate-400"><span>{appointment}</span></td>
                                            <td className="h-14 w-64 border-t border-l border-slate-400"> <button className=" font-bold w-full h-full" onClick={(e) => handlerMakeReserve(appointment)}
                                            >Available slot</button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <div className="absolute
                    top-12 w-full right-0">
                        {
                            reservesDay.reservesDay && reservesDay.reservesDay.map((e) => {
                                const indexStart = shedules.indexOf(e.shiftStart.slice(0, 5))
                                const indexEnd = shedules.indexOf(e.shiftEnd.slice(0, 5))
                                const height = (indexEnd - indexStart) * 3.5
                                const top = indexStart * 3.5
                                return (
                                    <div key={e.id}
                                    className="w-64 ml-16 text-center bg-white absolute border border-slate-400 flex justify-center"
                                    style={{
                                        height: `${height}rem`,
                                        top: `${top}rem`
                                    }}
                                    >
                                        <div className="w-64 text-center bg-slate-600 absolute rounded-xl border border-slate-100 flex justify-center items-center"
                                            style={{
                                                height: `${height}rem`
                                            }}>
                                                <IoPersonCircleOutline className="text-white h-5 w-5"/>
                                            <h2 className="text-white font-bold">{e.shiftStart} / {e.shiftEnd}</h2>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            {makeReserve && <AsideReservation hourReserve={hourReserve} onClose={() => setMakeReserve(false)} />}
        </>
    )
}