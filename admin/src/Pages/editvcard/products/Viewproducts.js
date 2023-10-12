import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { vproduct } from '../../../store/product/Productslice';
import { useNavigate } from 'react-router-dom';
import { Table } from 'antd';
import { AiFillEdit,AiFillDelete } from "react-icons/ai";
import { Button } from 'react-bootstrap';

function Viewproducts() {
  const columns =[
    {title:"slno",dataIndex:"id"},
    {title:"Productname",dataIndex:"Productname"},
    {title:"Price",dataIndex:"Price"},
    {title:"Producturl",dataindex:"Producturl"},
];
 const data = [];

 const { productData } = useSelector(
  (state) => state?.productdatax
);

const dispatch = useDispatch();

const Navigate= useNavigate()

const productnew = () => {
  Navigate("/addproduct");
};

useEffect(()=>{
  dispatch(vproduct())
},[]);

for(let i=0; i < productData.length; i++){
  data.push({
    id:i+1,
    Productname:productData[i].Productname,
    Price:productData[i].Price,
    // Producturl:productData[i].Producturl,
    // Producticon:productData[i].Producticon,
    // action:(
    //   <div>
    //     <AiFillEdit onClick={()=>Navigate('/update/' + productData[i]._id)}/>
    //     <AiFillDelete onClick={()=>deleteAction(productData[i]._id)}/>
    //   </div>
    // )
    
    
  })
}


  return (
    <div>
      <div className="vcard-top">
        <h1>Service List</h1>
        <Button type="primary" onClick={productnew}>
          New Product
        </Button>
      </div> 
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  )
}

export default Viewproducts       