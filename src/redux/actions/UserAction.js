import { userServices } from "../../services/UserServices"
// import { history } from "../../App";
import { useHistory } from "react-router-dom";

export const dangNhapAction = (thongTinNguoiDung)=>{
    
    console.log(thongTinNguoiDung);
    return async dispatch =>{
        try {
            const result = await userServices.dangNhap(thongTinNguoiDung);
            let history = useHistory();
            console.log(result)
            history.push("/admin");
        } catch (error) {
            console.log("ERROR",error);
            alert("Login Failed")
        }
    }
}