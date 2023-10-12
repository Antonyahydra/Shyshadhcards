import { PRODUCT } from "../../const/ApiConst";
import { INSTANCE } from "../../const/ApiHeader";

export const Addproduct = async (productdata) => {
  const response = await INSTANCE.post(`${PRODUCT}/addproduct`, productdata);
  return response.data;
};
export const Viewproduct = async (productdata) => {
  const response = await INSTANCE.get(`${PRODUCT}/viewproduct`, productdata);
  return response.data;
};

const addproduct = {
  Addproduct,
  Viewproduct
};

export default addproduct;
