import React, { useState } from "react";
import { Button, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { useDispatch } from "react-redux"; // Import useDispatch from react-redux
import { service } from "../../../store/addservice/Serviceslice";

function Addservice() {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");

  const dispatch = useDispatch(); // Get the dispatch function

  const addArray = () => {
    const data = {
      Servicename: value,
      Description: value2,
    };
    setList([...list, data]);

    // Dispatch the 'service' action to update the Redux store
    console.log(list);
    dispatch(service(data));
  };

  return (
    <div>
      <div className="service-container">
        <FormGroup className="fm-i">
          <FormLabel>Service Name:</FormLabel>
          <FormControl
            type="text"
            name="Servicename"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
        </FormGroup>

        <FormGroup className="fm-i">
          <FormLabel>Description:</FormLabel>
          <FormControl
            as="textarea" // Use 'as' to specify a textarea input
            name="Description"
            value={value2}
            onChange={(event) => setValue2(event.target.value)}
          />
        </FormGroup>

        <Button type="button" onClick={addArray}>
          Save
        </Button>
        <Button variant="outline-danger">Discard</Button>
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

export default Addservice;
