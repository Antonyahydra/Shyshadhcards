import { SERVICE } from "../../const/ApiConst";
import { INSTANCE } from "../../const/ApiHeader";

export const Addservice = async (servicedata) => {
  const response = await INSTANCE.post(`${SERVICE}/addservice`, servicedata);
  return response.data;
};
export const Viewservice = async (servicedata) => {
  const response = await INSTANCE.get(`${SERVICE}/viewservice`, servicedata);
  return response.data;
};
export const Editservice = async (servicedata) => {
  const response = await INSTANCE.put(`${SERVICE}/editservice`, servicedata);
  return response.data;
};
export const Deleteservice = async (servicedata) => {
  const response = await INSTANCE.delete(
    `${SERVICE}/deleteservice`,
    servicedata
  );
  return response.data;
};
export const Findoneservice = async (servicedata) => {
  const response = await INSTANCE.post(
    `${SERVICE}/getsingle`,
    servicedata
  );
  return response.data;
};

const addservice = {
  Addservice,
  Viewservice,
  Editservice,
  Deleteservice,
  Findoneservice
};

export default addservice;
