import React, { useEffect } from "react";
import Header from "../Header/Header";
import Banner from "/public/Banner.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { getAllReserves } from "../../redux/reservesActions";
import { TableReservations } from "../TableReservations/TableReservations";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../Loading/Loading";
import { DateField, DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";


function Home() {
    const allReserves = useSelector((state) => state.reserves.reserves)
    const dispatch = useDispatch()
    const { user } = useAuth0()
    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()

    useEffect(() => {
        dispatch(getAllReserves("25022024"))
    }, [])
    if (user) {
        return (
            <div>
                <Header />
                <div>
                    <img src={Banner} alt="" />
                </div>
                <div className="mx-auto text-center">
                    <button>atras</button>
                    <span>{`${day}/${month}/${year}`}</span>
                    <button>adelante</button>
                </div>
                <h2>{user.name}</h2>
                <img src={user.picture} alt={user.name} />
                <p>{user.email}</p>
                {allReserves.length ? <h1>Hay reservas</h1> : <h1>Cargando...</h1>}
                <TableReservations />
                <h2>Reserva tu turno!</h2>
            </div>
        )
    }
    return <Loading/>
}

export default Home