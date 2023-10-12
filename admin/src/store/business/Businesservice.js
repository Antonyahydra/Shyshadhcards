import { BUSINESS } from "../../const/ApiConst"
import { INSTANCE } from "../../const/ApiHeader"


export const AddBusiness = async(businessdata) =>{
    const response = await INSTANCE.post(`${BUSINESS}/addbusiness`,businessdata)
    return response.data
}

const busineservice = {
    AddBusiness
}

export default busineservice