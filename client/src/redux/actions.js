import axios from "axios"
import { GET_RESERVES } from "./actionTypes"

export function getReserves() {
 return function (dispatch) {
    dispatch({type: GET_RESERVES})
    axios.get("/reserves")
    .then((res)=>console.log(res))
 }   
}