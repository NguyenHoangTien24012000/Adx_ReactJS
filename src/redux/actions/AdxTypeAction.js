import { adxTypeServices } from "../../services/AdxTypeServices"
import { GET_ALL_ADX_TYPE, SET_ADX_TYPE } from "../types/AdxType";

export const getAllTypeAdxAction = ()=>{
    return async(dispatch) =>{
        try {
            const result = await adxTypeServices.getAllTypeAdxAction();
            // console.log(result) 
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

export const getADXTypeAction = (ADXType) => {
    return async(dispatch) =>{
        try {
            const result = await adxTypeServices.getADXTypeAction(ADXType);
            console.log(result);
            if(result.status === 200){
                dispatch({
                    type : SET_ADX_TYPE,
                    adxType : result.data.data
                })
            }
        } catch (error) {
            
        }
    }
}


export const upLoadFileImage = (file) =>{
    return async(dispatch) =>{
        try {
            console.log(file);
            const result = await adxTypeServices.upLoadFileAction(file);
            console.log(result);
        } catch (error) {
            
        }
    }
}