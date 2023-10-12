import React, { useEffect } from "react";
import "../newvcard/Newvcard.css";
import { Button } from "antd";
import { useFormik } from "formik";
import { FormControl, FormGroup, FormLabel, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { vcard } from "../../../store/vcard/VcardSlice";
// import Imageupload from "../../../components/imageupload/Upload";
import { Typography } from 'antd'

const { Title } = Typography

let Schema = yup.object().shape({
  Firstname: yup.string().required("required"),
});

function Newvcard() {
  const { isError, isLoading, isSuccess, vcarddata } = useSelector(
    (state) => state?.vcardDatax
  );

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      URLAlias: "",
      Firstname: "",
      Lastname: "",
      Phone: "",
      Alternatephone: "",
      Email: "",
      Alternateemail: "",
      Location: "",
      Dateofbirth: "",
      Jobtitle: "",
      Company: "",
      Description: ""
      
    },
    validationSchema: Schema,
    onSubmit: (values) => {
      console.log(values);
      dispatch(vcard(values));
    },
  });

  useEffect(() => {
    if (isError) {
      alert("Sorry Something went wrong");
    }
    if (isLoading) {
      alert("Loading");
    }
    if (isSuccess) {
      alert("Success");
    }
  }, [isError, isLoading, isSuccess, vcarddata]);

  return (
    <div className="vcard-container p-5">
      <Title level={6}>Basic Info</Title>
      <div className="base-container">
        <Form onSubmit={formik.handleSubmit} className='add-vcard-form-container'>
          <FormGroup className="m-2">
            <FormLabel>URL Alias:</FormLabel>
            <FormControl
              type="text"
              name="URLAlias"
              onChange={formik.handleChange}
              value={formik.values.URLAlias}
              disabled
            />
          </FormGroup>
          <div className="bc-1 m-2">
            <FormGroup className="m-2 w-100">
              <FormLabel>First Name:</FormLabel>
              <FormControl
                type="text"
                name="Firstname"
                onChange={formik.handleChange}
                value={formik.values.Firstname}
              />
            </FormGroup>
            <FormGroup className="m-2 w-100">
              <FormLabel>Last Name:</FormLabel>
              <FormControl
                type="text"
                name="Lastname"
                onChange={formik.handleChange}
                value={formik.values.Lastname}
              />
            </FormGroup>
          </div>
          <div className="bc-1 m-2">
            <FormGroup className="m-2 w-100">
              <FormLabel>Phone</FormLabel>
              <FormControl
                type="number"
                name="Phone"
                onChange={formik.handleChange}
                value={formik.values.Phone}
              />
            </FormGroup>
            <FormGroup className="m-2 w-100">
              <FormLabel>Alternate Phone:</FormLabel>
              <FormControl
                type="number"
                name="Alternatephone"
                onChange={formik.handleChange}
                value={formik.values.Alternatephone}
              />
            </FormGroup>
          </div>
          <div className="bc-1 m-2">
            <FormGroup className="m-2 w-100">
              <FormLabel>Email</FormLabel>
              <FormControl
                type="email"
                name="Email"
                onChange={formik.handleChange}
                value={formik.values.Email}
              />
            </FormGroup>
            <FormGroup className="m-2 w-100">
              <FormLabel>Alternate Email:</FormLabel>
              <FormControl
                type="email"
                name="Alternateemail"
                onChange={formik.handleChange}
                value={formik.values.Alternateemail}
              />
            </FormGroup>
          </div>
          <div className="bc-1 m-2">
            <FormGroup className="m-2 w-100">
              <FormLabel>Location</FormLabel>
              <FormControl
                type="text"
                name="Location"
                onChange={formik.handleChange}
                value={formik.values.Location}
              />
            </FormGroup>
            <FormGroup className="m-2 w-100">
              <FormLabel>Date of Birth:</FormLabel>
              <FormControl
                type="date"
                name="Dateofbirth"
                onChange={formik.handleChange}
                value={formik.values.Dateofbirth}
              />
            </FormGroup>
          </div>
          <div className="bc-1 m-2">
            <FormGroup className="m-2 w-100">
              <FormLabel>Job Title:</FormLabel>
              <FormControl
                type="text"
                name="Jobtitle"
                onChange={formik.handleChange}
                value={formik.values.Jobtitle}
              />
            </FormGroup>
            <FormGroup className="m-2 w-100">
              <FormLabel>Company:</FormLabel>
              <FormControl
                type="text"
                name="Company"
                onChange={formik.handleChange}
                value={formik.values.Company}
              />
            </FormGroup>
          </div>
          <div className="bc-1 m-2">
            <FormGroup className="m-2 w-100">
              <FormLabel>Description</FormLabel>
              <textarea
                name="Description"
                onChange={formik.handleChange}
                className="form-control"
                rows={6}
                value={formik.values.Description}
              />
            </FormGroup>
            
          </div>
          <div className="bc-1 m-2">
          <Button type="primary" onClick={formik.handleSubmit}>Save</Button>
          <Button type="primary" danger onClick={formik.handleReset}>Discard</Button>
          </div>
        </Form>
      </div>
      
        {/* <Form>
          <div className="details-container1">
            <Form.Check
              type="switch"
              id="custom-switch1"
              label="Language Enable:"
            />
            <Form.Check
              type="switch"
              id="custom-switch2"
              label="Enable Download QR code:"
            />
          </div>
          
        </Form> */}
    
    </div>
  );
}

export default Newvcard;
