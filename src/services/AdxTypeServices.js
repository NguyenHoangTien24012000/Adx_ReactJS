import { BaseServices } from "./baseServices";

class AdxTypeServices extends BaseServices{
    constructor(){
        super();
    }
    getAllTypeAdxAction = () =>{
        return this.get('/adxType/getAllAdxGroupType');
    }
}

export const adxTypeServices = new AdxTypeServices()