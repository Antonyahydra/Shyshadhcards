import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import {
  Button,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";

import CurrencySelect from "../../../components/formcomponents/Currency";

import { Description } from "@mui/icons-material";
import { product } from "../../../store/product/Productslice";



function Addproduct() {

  const [list, setList] = useState([]);
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  

  const dispatch = useDispatch();

  const addArray = () => {
    const data = {
    Productname: value,
    Description: value2
  };
  setList([...list,data]);
  dispatch(product(data))
}

  

  return (
    <div>
      <div>
     
        <FormGroup>
          <FormLabel>Product Name:</FormLabel>
        
          <FormControl
            type="text"
            name="Productname"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            
          />
        </FormGroup>
        {/* <FormGroup>
          <FormLabel>Price:</FormLabel>
          
          <FormControl
            type="text"
            name="Price"
            onChange={formik.handleChange("Price")}
            values={formik.values.Price}
          />
        </FormGroup> */}
        <FormGroup>
          <FormLabel>Description:</FormLabel>
          
          <FormControl
            type="text-area"
            name="Description"
            value={value2}
            onChange={(event) => setValue2(event.target.value)}
            
          />
        </FormGroup>
        {/* <CurrencySelect />
        <FormGroup>
          <FormLabel>Product URL:</FormLabel>
          
          <FormControl
            type="text"
            name="Producturl"
            onChange={formik.handleChange("Producturl")}
            values={formik.values.Producturl}
          />
        </FormGroup> */}
        {/* <FormGroup>
          <FormLabel>Product Icon:</FormLabel>

          <FormControl
            type="image"
            name="Producticon"
            onChange={formik.handleChange("Producticon")}
            values={formik.values.Producticon}
          />
        </FormGroup> */}
        <Button type="submit" onClick={addArray}>
          Save
        </Button>
        <Button variant="outline-danger">Discard</Button>{" "}
  
    </div>

    {list.map((item, key) => (
        <div key={key}>
          {item.Servicename}
          {item.Description}
        </div>
      ))}
    </div>
  );
}
export default Addproduct;
