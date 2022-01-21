import { BaseServices } from "./baseServices";

class AdxTypeServices extends BaseServices{
    constructor(){
        super();
    }
    getAllTypeAdx = () =>{
        return this.get('/adxType/getAllAdxGroupType');
    }
    getADXGroupType = (ADXType) =>{
        return this.get(`/adxType/getAdxGroupType/${ADXType}`)
    }
    upLoadAdxType = (file) =>{
        return this.post(`/admin/adxType/updateAdxType`, file)
    }
    getAdxType = (idADX) =>{
        return this.get(`/adxType/getAdxType/${idADX}`)
    }
}

export const adxTypeServices = new AdxTypeServices()