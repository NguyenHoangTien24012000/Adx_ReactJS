import { adxTypeServices } from "../../services/AdxTypeServices"
import { GET_ALL_ADX_TYPE, SET_ADX_GROUP_TYPE, SET_ADX_TYPE } from "../types/AdxType";

export const getAllTypeAdxAction = ()=>{
    return async(dispatch) =>{
        try {
            const result = await adxTypeServices.getAllTypeAdx();
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

export const getADXGroupTypeAction = (ADXType) => {
    return async(dispatch) =>{
        try {
            const result = await adxTypeServices.getADXGroupType(ADXType);
            if(result.status === 200){
                dispatch({
                    type : SET_ADX_GROUP_TYPE,
                    adxGroupType : result.data.data
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
}


export const upLoadAdxTypeAction = (file) =>{
    return async(dispatch) =>{
        try {
            const result = await adxTypeServices.upLoadAdxType(file);
            if(result.status === 200) {
                alert("Update Success!!")
            }
        } catch (error) {
            alert("Update Failed!!")
            console.log(error);
        }
    }
}


export const getAdxTypeAction = (idADX) =>{
    return async (dispatch) =>{
        try {
            const result = await adxTypeServices.getAdxType(idADX)
            // console.log(result);
            if(result.status === 200){
                dispatch({
                    type :SET_ADX_TYPE,
                    adxType : result.data.data[0]
                })
               
            }
        } catch (error) {
           
            console.log(error)
        }
    }
}