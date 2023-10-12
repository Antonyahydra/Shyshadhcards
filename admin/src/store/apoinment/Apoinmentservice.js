import { APOINMENT } from "../../const/ApiConst"
import { INSTANCE } from "../../const/ApiHeader"

export const Addapoinment =  async (apoinmentdata) =>{
    const response = await INSTANCE.post(`${APOINMENT}/addapoinment`,apoinmentdata)
    return response.data
}

const addapoinment = {
    Addapoinment
}

export default addapoinment