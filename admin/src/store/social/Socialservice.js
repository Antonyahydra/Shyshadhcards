import { SOCIAL } from "../../const/ApiConst"
import { INSTANCE } from "../../const/ApiHeader"



export const Addsocial = async(socialdata) =>{
    const response = await INSTANCE.post(`${SOCIAL}/addsocial`,socialdata)
    return response.data
}

const addsocial = {
    Addsocial
}

export default addsocial