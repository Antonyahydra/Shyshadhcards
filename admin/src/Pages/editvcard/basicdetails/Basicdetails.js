import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import * as yup from "yup"
import { Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { vedit } from "../../../store/vcard/VcardSlice";
import Imageupload from "../../../components/imageupload/Upload";
import { Button } from 'antd'


let Schema = yup.object().shape({
  URLAlias : yup.string().required("required"),
  Vcardname:    yup.string().required("required"),
  });


function Basicdetails() {
  const { isError, isLoading, isSuccess,vcarddata } = useSelector(   
    (state) => state?.vcardDatax
  );

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      URLAlias: "",
      Vcardname: "",
      Occupation: "",
      Description: "",
      Profileimage: "",
      Coverimage: "",
      Firstname: "",
      Email: "",
      Alternateemail: "",
      Location: "",
      Dateofbirth: "",
      Jobtittle: "",
      Lastname: "",
      Phone: "",
      Alternatephone: "",
      Locationurl: "",
      Company: "",
      Defaultlanguage: "",
    },
    validationSchema: Schema, 
     onSubmit: (values) => {
      dispatch(vedit(values));
      formik.handleReset();
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
  },[isError,isLoading,isSuccess,vcarddata])

  return (
    <div>
      <div>
      <div className="vcard-container">
      New Vcard
      <div className="base-container">
        
        <Form onSubmit={formik.handleSubmit}>
          <FormGroup>
            <FormLabel>URL Alias:</FormLabel>
            <FormControl
              type="text"
              name="URLAlias"
              onchange={formik.handleChange("URLAlias")}
              values={formik.values.URLAlias}
            />
          </FormGroup>
          <div className="bc-1">
          <FormGroup>
            <FormLabel>Vcardname:</FormLabel>
            <FormControl
              type="text"
              name="Vcardname"
              onchange={formik.handleChange("Vcardname")}
              values={formik.values.Vcardname}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Occupation:</FormLabel>
            <FormControl
              type="text"
              name="Occupation"
              onchange={formik.handleChange("Occcupation")}
              values={formik.values.Occupation}
            />
          </FormGroup>
          </div>
          <FormGroup>
            <FormLabel>Description</FormLabel>
            <FormControl
              type="text-area"
              name="Description"
              onchange={formik.handleChange("Description")}
              values={formik.values.Description}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Profileimage:</FormLabel>
            <FormControl
              type="image"
              name="Profileimage"
              onchange={formik.handleChange("Profileimage")}
              values={formik.values.Profileimage}

            />
            <Imageupload/>
          </FormGroup>
          <FormGroup>
            <FormLabel>Coverimage:</FormLabel>
            <FormControl
              type="image"
              name="Coverimage"
              onchange={formik.handleChange("Coverimage")}
              values={formik.values.Coverimage}
            />
            <Imageupload/>
          </FormGroup>
          <Button type="submit">Save</Button>
          <Button type="reset">Discard</Button>
        </Form>
      </div>
      <div>
      <Form>
        <div className="details-container1">
          <h1> Vcard Details</h1>
          
            <FormGroup>
              <FormLabel>Firstname:</FormLabel>
              <FormControl
                type="text"
                name="Firstname"
                onChange={formik.handleChange("Firstname")}
                values={formik.values.Firstname}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Email</FormLabel>
              <FormControl
                type="email"
                name="Email"
                onChange={formik.handleChange("Email")}
                values={formik.values.Email}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Alternate Email:</FormLabel>
              <FormControl
                type="email"
                name="Alternateemail"
                onChange={formik.handleChange("Alternateemail")}
                values={formik.values.Alternateemail}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Location</FormLabel>
              <FormControl
                type="text"
                name="Location"
                onChange={formik.handleChange("Location")}
                values={formik.values.Location}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Date of Birth: </FormLabel>
              <FormControl
                type="date"
                name="Dateofbirth"
                onChange={formik.handleChange("Dateofbirth")}
                values={formik.values.Dateofbirth}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Job Title:</FormLabel>
              <FormControl
                type="text"
                name="Jobtittle"
                onChange={formik.handleChange("Jobtittle")}
                values={formik.values.Jobtittle}
              />
            </FormGroup>

            <Form.Check
              type="switch"
              id="custom-switch"
              label="Language Enable:"
            />
            <Form.Check
              type="switch"
              id="custom-switch"
              label="Enable Download QR code:"
            />
         </div>
        <div className="details-container2">
           

        <FormGroup>
          <FormLabel>Lastname:</FormLabel>
          <FormControl
            type="text"
            name="Lastname"
            onChange={formik.handleChange("Lastname")}
            values={formik.values.Lastname}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Phone</FormLabel>
          <FormControl
            type="number"
            name="Phone"
            onChange={formik.handleChange("Phone")}
            values={formik.values.Phone}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Alternatephone:</FormLabel>
          <FormControl
            type="number"
            name="Alternatephone"
            onChange={formik.handleChange("Alternatephone")}
            values={formik.values.Alternatephone}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Locationurl :</FormLabel>
          <FormControl
            type="text"
            name="Locationurl"
            onChange={formik.handleChange("Locationurl")}
            values={formik.values.Locationurl}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Company:</FormLabel>
          <FormControl
            type="text"
            name="Company"
            onChange={formik.handleChange("Company")}
            values={formik.values.Company}
          />
        </FormGroup>
        

          {/* Last Name:<input type="text" placeholder="Enter Last Name"></input>
          Phone:<input type="text" placeholder="Enter Phone Number"></input>
          Alternate Phone:
          <input type="text" placeholder="Alternate Phone"></input>
          Location URL:
          <input type="text" placeholder="Enter Your Location URL"></input>
          Company:<input type="text" placeholder="Enter Company Name"></input>
           <Dropdown
      menu={{
        languages
      }}
      placement="bottomLeft"
      arrow
    ></Dropdown> 
           Enable Enquiry Form: <Toggle />
          QR code Downlord size:<input type="range"></input> */}
        </div> 

        </Form>
        </div>
    </div>
      </div>
    </div>
  )
}

export default Basicdetails