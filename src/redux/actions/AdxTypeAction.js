import { adxTypeServices } from "../../services/AdxTypeServices"
import { GET_ALL_ADX_TYPE } from "../types/AdxType";

export const getAllTypeAdxAction = ()=>{
    return async(dispatch) =>{
        try {
            const result = await adxTypeServices.getAllTypeAdxAction();
            console.log(result) 
            if(result.status === 200){
                dispatch({
                    type : GET_ALL_ADX_TYPE,
                    allTypeAdx : result.data.data
                })
            }
        } catch (error) {
            console.log(error);
        }
    }
}