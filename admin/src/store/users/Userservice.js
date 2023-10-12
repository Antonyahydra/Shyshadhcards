import { USER } from "../../const/ApiConst"
import { INSTANCE } from "../../const/ApiHeader"

export const Signup=async(signupdata)=>{
    const response=await INSTANCE.post(`${USER}/adduser`,signupdata)
    return response.data
}


export const Login=async(logindata)=>{
    const response= await INSTANCE.post(`${USER}/login`,logindata)
    return response.data
}



const userservice={
    Signup,
    Login
}
export default userservice