import { createBrowserHistory } from "history";
import { userServices } from "../../services/UserServices";
import { ACCESS_TOKEN } from "../../util/config";
const history = createBrowserHistory();

export const dangNhapAction = (thongTinNguoiDung, history)=>{
    
    // console.log(thongTinNguoiDung);
    // console.log(localStorage.getItem('token',ACCESS_TOKEN))
    return async dispatch =>{
        try {
            const result = await userServices.dangNhap(thongTinNguoiDung);
            if(result.status === 200){
                localStorage.setItem(ACCESS_TOKEN, result.data.token);
                history.push('/admin');
            }
        } catch (error) {
            console.log("ERROR",error);
            alert("Login Failed")
        }
    }
}



export const checkTokenAction = ()=>{
    
    return async dispatch =>{
        try {
            const result = await userServices.checkToken();
            console.log(result)
        } catch (error) {
            alert("Login again!!")
            history.push('/login')
            console.log("ERROR",error);
        }
    }
}



