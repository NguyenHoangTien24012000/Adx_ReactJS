import { BaseServices } from "./baseServices";

class AdxTypeServices extends BaseServices{
    constructor(){
        super();
    }
    getAllTypeAdxAction = () =>{
        return this.get('/adxType/getAllAdxGroupType');
    }
    getADXTypeAction = (ADXType) =>{
        return this.get(`/adxType/getAdxGroupType/${ADXType}`)
    }
    upLoadFileAction = (file) =>{
        return this.post(`/upLoadFile/upImage`, file)
    }
}

export const adxTypeServices = new AdxTypeServices()