import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  dservice,
  eservice,
  vservice,
} from "../../../store/addservice/Serviceslice";
import { Button } from "react-bootstrap";
import { Table } from "antd";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import "./Viewservices.css";
function Viewservices() {
  const columns = [
    { title: "slno", dataIndex: "id" },
    { title: "Serviceurl", dataIndex: "Serviceurl" },
    { title: "Servicename", dataIndex: "Servicename" },
    { title: "ACTION", dataIndex: "action" },
  ];

  const data = [];

  const { serviceData } = useSelector((state) => state?.servicedatax);

  const dispatch = useDispatch();

  // const [searchTerm, setSearchTerm] = useState('');
  const Navigate = useNavigate();

  const servicenew = () => {
    Navigate("/addservice");
  };

  useEffect(() => {
    dispatch(vservice());
  }, []);

  for (let i = 0; i < serviceData.length; i++) {
    data.push({
      id: i + 1,
      Servicename: serviceData[i].Servicename,
      Serviceurl: serviceData[i].Serviceurl,
      action: (
        <div className="abc">
          <AiFillEdit
            onClick={() => Navigate("/update/" + serviceData[i]._id)}
          />
          <AiFillDelete
            onClick={() => deleteAction(serviceData[i].Serviceurl)}
          />
        </div>
      ),
    });
  }

  //edit service
  const editAction = (data) => {
    // console.log(data);
    dispatch(eservice(data));
  };

  //delete service
  const deleteAction = (data) => {
    dispatch(dservice(data));
  };

  return (
    <div>
      <div className="vcard-top">
        <h1>Service List</h1>
        <Button type="primary" onClick={servicenew}>
          New Service
        </Button>
      </div>
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
}

export default Viewservices;
