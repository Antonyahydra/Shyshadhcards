import { useFormik } from "formik";
import React, { useEffect } from "react";
import { Button, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { findoneser } from "../../../store/addservice/Serviceslice";


function Editservice() {


  const parm = useParams()

  console.log(parm); 

  const dispatch = useDispatch()

  useEffect(()=>{
    const data={id:parm.id}
    dispatch(findoneser(data))
  },[])
  const { serviceData } = useSelector(
    (state) => state?.servicedatax
  );
  console.log(serviceData);
  
  const formik = useFormik({
    if (serviceData) {
        formik.setValues({
          Servicename: serviceData.Servicename || "",
          Serviceurl: serviceData.Serviceurl || "",
          Description: serviceData.Description || "",
        //   Serviceicon: serviceData.Serviceicon || "",
        });
      },
    
    
    // validationSchema: Schema,
onSubmit: (values) => {
    //   dispatch(addservice(values));
    },
  },[]);
  

  return (
    <div>
      {" "}
      <div className="service-container">
        <Form className="form-container" onSubmit={formik.handleSubmit}>
          <FormGroup className="fm-i">
            <FormLabel>Name:</FormLabel>
            <FormControl
              type="text"
              name="Servicename"
              onChange={formik.handleChange("Servicename")}
              values={formik.values.Servicename}
            />
            <div className="text-danger">
              {formik.touched.Servicename && formik.errors.Servicename}
            </div>
          </FormGroup>
          <FormGroup className="fm-i">
            <FormLabel>Service URL:</FormLabel>

            <FormControl
              type="text"
              name="Serviceurl"
              onChange={formik.handleChange("Serviceurl")}
              values={formik.values.Serviceurl}
            />
          </FormGroup>
          <FormGroup className="fm-i">
            <FormLabel>Description:</FormLabel>

            <FormControl
              type="text-area"
              name="Description"
              onChange={formik.handleChange("Description")}
              values={formik.values.Description}
            />
          </FormGroup>
          <FormGroup className="fm-i">
            <FormLabel>Serviceicon :</FormLabel>
            <FormControl
              type="image"
              name="Serviceicon"
              onChange={formik.handleChange("Serviceicon")}
              values={formik.values.Serviceicon}
            />
          </FormGroup>
          <Button type="submit" onClick={formik.handleSubmit}>
            Save
          </Button>
          <Button variant="outline-danger" onClick={formik.handleReset}>
            Discard
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Editservice;
