import { GET_RESERVES } from "./actionTypes"

const initialState = {
    reserves: []
}

function Reducer(state = initialState, action) {
    switch(action.type){
        case GET_RESERVES:
            return {
                ...state,
                reserves: action.payload
            }
            default: 
            return state
    }
}

export default Reducer