import React, {useEffect} from "react";
import img from "/IconPadel.png";
import { useDispatch } from "react-redux";
import { getUserDetails } from "../../redux/usersActions";
import { useAuth0 } from "@auth0/auth0-react";


function Header(){
    const dispatch = useDispatch()
    const { user } = useAuth0()
    const handleUser = () => {
        dispatch(getUserDetails({name: "hola", email:"hola"}))
    }
    return (
        <nav>
            <div className="h-16 w-16 flex">
                <img src={img} alt="Icono padel" className="w-full"/>
                <button onClick={handleUser}>añsdlkfjasdl</button>
            </div>
        </nav>
    )
}

export default Header