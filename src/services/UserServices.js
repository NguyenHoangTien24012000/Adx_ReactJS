import { BaseServices } from "./baseServices";

class UserServices extends BaseServices{
    constructor(){
        super()
    }
    dangNhap = (thongTinDangNhap) =>{
        return this.post(`/admin/checkLogin`, thongTinDangNhap)
    }
}

export const userServices = new UserServices();