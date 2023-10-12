import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Checkbox, Radio } from "antd";
import { Button, Form } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { GrAdd } from "react-icons/gr";
import Timeselect from "../../../components/formcomponents/Timepicker";
import { apoinment } from "../../../store/apoinment/Apoinmentslice";
import "./Apoinments.css";

function Apoinments() {
  const dispatch = useDispatch();

  const [timeSlots, setTimeSlots] = useState({
    Monday: [{ id: 0, from: "", to: "" }],
    Tuesday: [{ id: 0, from: "", to: "" }],
    Wednesday: [{ id: 0, from: "", to: "" }],
    Thursday: [{ id: 0, from: "", to: "" }],
    Friday: [{ id: 0, from: "", to: "" }],
    Saturday: [{ id: 0, from: "", to: "" }],
    Sunday: [{ id: 0, from: "", to: "" }],
  });

  const addTimeSlot = (day) => {
    const newId = timeSlots[day].length;
    const newTimeSlot = { id: newId, from: "", to: "" };
    setTimeSlots((prevSlots) => ({
      ...prevSlots,
      [day]: [...prevSlots[day], newTimeSlot],
    }));
  };

  const removeTimeSlot = (day, id) => {
    setTimeSlots((prevSlots) => ({
      ...prevSlots,
      [day]: prevSlots[day].filter((slot) => slot.id !== id),
    }));
  };

  const handleSave = () => {
   
    const selectedSlots = [];
    for (const day in timeSlots) {
      selectedSlots.push(...timeSlots[day]);
    }
    dispatch(apoinment(selectedSlots));
  };

  return (
    <div>
      <div>
        <Form>
          {Object.keys(timeSlots).map((day) => (
            <div className="b-container" key={day}>
              <div className="day-row">
                {day}
                <Checkbox></Checkbox>
                <div className="time-slot-container">
                  {timeSlots[day].map((slot) => (
                    <div key={slot.id} className="time-slot-row">
                      <Timeselect /> To <Timeselect />
                      <AiFillDelete onClick={() => removeTimeSlot(day, slot.id)} />
                    </div>
                  ))}
                </div>
                <GrAdd onClick={() => addTimeSlot(day)} />
              </div>
            </div>
          ))}
          <div className="plan-container">
            <Radio.Group
              defaultValue="a"
              buttonStyle="solid"
              size="large"
              style={{
                marginTop: 16,
              }}
            >
              <Radio.Button value="a">Free</Radio.Button>
              <Radio.Button value="b">Paid</Radio.Button>
            </Radio.Group>
          </div>
          <div>
            <Button type="button" onClick={handleSave}>
              Save
            </Button>
            <Button variant="outline-danger">Discard</Button>{" "}
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Apoinments;
