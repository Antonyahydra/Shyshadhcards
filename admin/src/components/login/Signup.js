import { useFormik } from "formik";
import React, { useEffect } from "react";
import {
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  Button,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { signup } from "../../store/users/Userslice";

let Schema = yup.object().shape({
  Fullname: yup.string().required("required"),
  Email:    yup.string().required("required"),
  Password: yup.string().required("required"),


});

function Signup() {
  const { isError, isLoading, isSuccess, userData } = useSelector(   
    (state) => state?.userDatax
  );
 

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      Fullname: "",
      Email: "",
      Password: "",
      ConfirmPassword: "",
    },
    validationSchema: Schema,
    onSubmit: (values) => {
      console.log(values); // Log the actual values, not the string "values"
      dispatch(signup(values))
    },
  });

useEffect(()=>{
    if (isError) {
        alert("Sorry Something went wrong")
    }
    if (isLoading) {
        alert("Loading")
    }
    if (isSuccess) {
        alert("Sucess")
    }
},[isError,isLoading,isSuccess,userData])


  return (
    <div>
      <Form onSubmit={formik.handleSubmit}>
        <FormGroup>
          <FormLabel>Fullname:</FormLabel>
          <FormControl
            type="text"
            name="Fullname"
            onChange={formik.handleChange("Fullname")}
            values={formik.values.Fullname}
          />
          <div className="text-danger">
            {formik.touched.Fullname && formik.errors.Fullname}
          </div>       
        </FormGroup>
 
        <FormGroup>
          <FormLabel>Email:</FormLabel>
          <FormControl
            type="email"
            name="Email"
            onChange={formik.handleChange("Email")}
            values={formik.values.Email}
          />
        </FormGroup>

        <FormGroup>
          <FormLabel>Password:</FormLabel>
          <FormControl
            type="password"
            name="Password"
            onChange={formik.handleChange("Password")}
            values={formik.values.Password}
          />
        </FormGroup>

        <FormGroup>
          <FormLabel>Confirm Password:</FormLabel>
          <FormControl
            type="password"
            name="ConfirmPassword"
            onChange={formik.handleChange("ConfirmPassword")}
            values={formik.values.ConfirmPassword}
          />
        </FormGroup>

        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default Signup;
