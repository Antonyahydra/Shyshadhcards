import { Table } from "antd";
import React from "react";

function Viewservice() {
  const column = [
    {
      title: "Sl No",
      dataIndex: "name",
    },
  ];

  const data = [
    {
      id: 1,
      name: "ABC",
    },
  ];

  return <div>
    <Table columns={column} dataSource={data} />
  </div>;
}

export default Viewservice;
