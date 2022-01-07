import { GET_ALL_ADX_TYPE } from "../types/AdxType";

const initialState ={
    // user :
    allTypeAdx : [],
}

export default (state = initialState, action) =>{
    switch (action.type) {
        case GET_ALL_ADX_TYPE :
            console.log("action.allTypeAdx",action.allTypeAdx)
        return {...state, allTypeAdx : action.allTypeAdx}
        default:
            return state;
    }
}