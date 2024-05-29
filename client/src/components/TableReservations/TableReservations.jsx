import React, { useEffect, useState } from "react";
import AsideReservation from "../AsideReservation/AsideReservation";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getBooking } from "../../redux/bookingActions";
import { getShedules } from "../../redux/shedulesActions";
import { getReservesDay } from "../../redux/reservesActions";



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
                <div className="mx-auto justify-center pt-10 pb-2 flex ">
                    <MdOutlineArrowBackIos onClick={handleDateBack} className="h-8 w-8 text-primary-4 border-primary-5 border-y border-l" />
                    <span className="h-8 text-primary-4 text-3xl border border-primary-5 flex justify-center items-center px-3">{booking}</span>
                    <MdOutlineArrowForwardIos onClick={handleDateAdvance} className="h-8 w-8 text-primary-4 border-y border-r border-primary-5" />
                </div>
                <div className="relative">
                    <table className="w-80 border-collapse border border-black">
                        <caption className="bg-slate-300 text-center font-bold h-12">Cancha padel</caption>
                        <tbody>
                            {
                                shedules.map((appointment) => {
                                    return (
                                        <tr key={appointment} className="h-14">
                                            <td className="h-14 w-16 text-center border border-black"><span>{appointment}</span></td>
                                            <td className="h-14 w-64 border border-black"> <button className=" font-bold w-full h-full" onClick={(e) => handlerMakeReserve(appointment)}
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
                                    <div key={e.id} className="w-64 ml-16 text-center bg-slate-600 absolute"
                                        style={{
                                            height: `${height}rem`,
                                            top: `${top}rem`
                                        }}
                                    >
                                        <h2>{e.shiftStart} / {e.shiftEnd}</h2>
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