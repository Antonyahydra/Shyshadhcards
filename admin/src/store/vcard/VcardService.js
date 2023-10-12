import { VCARD } from "../../const/ApiConst"
import { IMAGEINSTANCE, INSTANCE } from "../../const/ApiHeader"


export const Vcard=async(vcarddata)=>{
    const response = await INSTANCE.post(`${VCARD}/addvcard`,vcarddata)
    return response.data
}

export const Vedit = async(vcarddata)=>{
     const response= await IMAGEINSTANCE.put(`${VCARD}/editvacard`,vcarddata)
     return response.data
}
const Vcardservice={
    Vcard,Vedit
}
export default Vcardservice