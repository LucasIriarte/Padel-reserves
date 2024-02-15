import React, { useEffect } from "react";
import Header from "../Header/Header";
import Banner from "/public/Banner.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { getAllReserves } from "../../redux/reservesActions";
import { TableReservations } from "../TableReservations/TableReservations";
import { useAuth0 } from "@auth0/auth0-react";
import LoginPage from "../LoginPage/LoginPage";
import { getUserDetails } from "../../redux/usersActions";


function Home() {
    const allReserves = [useSelector((state) => state.reserves.reserves)]
    const dispatch = useDispatch()
    const { loginWithRedirect, user, isAuthenticated, isLoading } = useAuth0()

    useEffect(() => {
        dispatch(getUserDetails())
        dispatch(getAllReserves())
    }, [])
    console.log(isAuthenticated)
    if(isAuthenticated){
        return (
            <div>
                    <Header />
                    <div>
                        <img src={Banner} alt="" />
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
    else return <LoginPage />

    // return (
    //     <>
    //         {
    //             isAuthenticated?
    //             <div>
    //                 <Header />
    //                 <div>
    //                     <img src={Banner} alt="" />
    //                 </div>
    //                 <h2>{user.name}</h2>
    //                 <img src={user.picture} alt={user.name} />
    //                 <p>{user.email}</p>
    //                 {allReserves.length ? <h1>Hay reservas</h1> : <h1>Cargando...</h1>}
    //                 <TableReservations />
    //                 <h2>Reserva tu turno!</h2>
    //             </div> : <LoginPage />
    //         }
    //     </>
    // )
}

export default Home