import { GET_ALL_ADX_TYPE, SET_ADX_TYPE } from "../types/AdxType";

const initialState = {
    // user :
    allTypeAdx: [],
    adxType : []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_ADX_TYPE:
            return { ...state, allTypeAdx: action.allTypeAdx }
        case SET_ADX_TYPE :
            return {...state, adxType : action.adxType}
        default:
            return state;
    }
}