import React, {useEffect} from "react";
import img from "/IconPadel.png";
import { useDispatch } from "react-redux";
import { getUserDetails } from "../../redux/usersActions";
import { useAuth0 } from "@auth0/auth0-react";


function Header(){
    const dispatch = useDispatch()
    const { user } = useAuth0()
    useEffect(()=> {
        if(user) {
            dispatch(getUserDetails({
                name: user.name,
                email: user.email
            }))
        }
    },[user,dispatch])
    return (
        <nav className="w-full bg-slate-100 drop-shadow-xl bg-primary-4">
            <div className="h-16 w-16 flex">
                <img src={img} alt="Icono padel" className="w-full"/>
            </div>
        </nav>
    )
}

export default Header