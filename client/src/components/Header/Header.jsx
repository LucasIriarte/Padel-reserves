import React, {useEffect} from "react";
import img from "/IconPadel.png";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../../redux/usersActions";
import { useAuth0 } from "@auth0/auth0-react";


function Header(){
    const userDetails = useSelector((state)=> state.userDetails)
    const dispatch = useDispatch()
    const { user } = useAuth0()
    useEffect(()=> {
        dispatch(getUserDetails({
            name: user.name,
            email: user.email
        }))
    },[])
    return (
        <nav>
            <div className="h-16 w-16 flex">
                <img src={img} alt="Icono padel" className="w-full"/>
            </div>
        </nav>
    )
}

export default Header