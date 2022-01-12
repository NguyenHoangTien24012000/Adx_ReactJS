import { BaseServices } from "./baseServices";

class AdxTypeServices extends BaseServices{
    constructor(){
        super();
    }
    getAllTypeAdxAction = () =>{
        return this.get('/adxType/getAllAdxGroupType');
    }
    getADXGroupTypeAction = (ADXType) =>{
        return this.get(`/adxType/getAdxGroupType/${ADXType}`)
    }
    upLoadFileAction = (file) =>{
        return this.post(`/adxType/upload`, file)
    }
    getAdxTypeAction = (idADX) =>{
        return this.get(`/adxType/getAdxType/${idADX}`)
    }
}

export const adxTypeServices = new AdxTypeServices()