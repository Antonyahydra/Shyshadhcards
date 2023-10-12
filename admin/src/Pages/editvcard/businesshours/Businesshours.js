import React, { useEffect, useState } from "react";
import "./businesshours.css";
import { Checkbox } from "@mui/material";
import Timeselect from "../../../components/formcomponents/Timepicker";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { Button, Form } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { GrAdd } from "react-icons/gr";
import { business } from "../../../store/business/Businesslice";

function Businesshours() {
  const { isSuccess, businessdata } = useSelector(
    (state) => state?.businessdatax
  );

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

  const formik = useFormik({
    initialValues: {
      Monday: false,
      Tuesday: false,
      Wednesday: false,
      Thursday: false,
      Friday: false,
      Saturday: false,
      Sunday: false,
      from_time: "",
      to_time: "",
    },
    onSubmit: (values) => {
      const businessDays = Object.keys(values)
        .filter((day) => values[day])
        .map((day) => day);

      const dataToSend = {
        businessDays,
        timeSlots,
        from_time: values.from_time,
        to_time: values.to_time,
      };

      dispatch(business(dataToSend));
    },
  });

  const addTimeSlot = (day) => {
    const newId = timeSlots[day].length;
    const newSlot = { id: newId, from: "", to: "" };
    setTimeSlots((prevSlots) => ({
      ...prevSlots,
      [day]: [...prevSlots[day], newSlot],
    }));
  };

  const updateTimeSlot = (day, id, field, value) => {
    setTimeSlots((prevSlots) => ({
      ...prevSlots,
      [day]: prevSlots[day].map((slot) =>
        slot.id === id ? { ...slot, [field]: value } : slot
      ),
    }));
  };

  const removeTimeSlot = (day, id) => {
    setTimeSlots((prevSlots) => ({
      ...prevSlots,
      [day]: prevSlots[day].filter((slot) => slot.id !== id),
    }));
  };

  useEffect(() => {
    if (isSuccess) {
      alert("Success");
    }
  }, [isSuccess, businessdata]);

  return (
    <div>
      <div className="business-inner">
        <div>
          <Form onSubmit={formik.handleSubmit}>
            {Object.keys(timeSlots).map((day) => (
              <div className="b-container" key={day}>
                <div className="day-row">
                  {day}
                  <Checkbox
                    name={day}
                    onChange={formik.handleChange}
                    checked={formik.values[day]}
                  />
                  <div className="time-slot-container">
                    {timeSlots[day].map((slot) => (
                      <div key={slot.id} className="time-slot-row">
                        <Timeselect
                          name={`${day}_from_${slot.id}`}
                          value={slot.from}
                          onChange={(value) =>
                            updateTimeSlot(day, slot.id, "from", value)
                          }
                        />{" "}
                        To{" "}
                        <Timeselect
                          name={`${day}_to_${slot.id}`}
                          value={slot.to}
                          onChange={(value) =>
                            updateTimeSlot(day, slot.id, "to", value)
                          }
                        />
                        <AiFillDelete
                          onClick={() => removeTimeSlot(day, slot.id)}
                        />
                      </div>
                    ))}
                  </div>
                  <GrAdd onClick={() => addTimeSlot(day)} />
                </div>
              </div>
            ))}
            <div>
              <Button type="submit">Save</Button>
              <Button variant="outline-danger">Discard</Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Businesshours;
