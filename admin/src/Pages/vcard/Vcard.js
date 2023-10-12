import { Button, Table } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Vcard.css";
import VcardTable from "../../components/formcomponents/Vcard";

function Vcard() {
  const [searchTerm, setSearchTerm] = useState("");

  const Navigate = useNavigate();

  const vcardnew = () => {
    Navigate("/newvcard");
  };
  const editVcard = () => {
    Navigate("/editvcard");
  };

  return (
    <div>
      <div className="vcard-top">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button type="primary" onClick={vcardnew}>
          New Vcard
        </Button>
        <Button type="primary" onClick={editVcard}>
          Edit Vcard
        </Button>
      </div>

      <div className="vcard-top">
        <VcardTable />
      </div>
    </div>
  );
}

export default Vcard;
