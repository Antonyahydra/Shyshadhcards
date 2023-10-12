import "./App.css";
import { Route, Routes } from "react-router-dom";
import Loginpage from "./Pages/Login/Loginpage";
import Home from "./Pages/home/Home";
import Sidebar from "./components/layout/Sidebar";
import Topbar from "./components/layout/Topbar";
import Vcard from "./Pages/vcard/Vcard";
import Resetpsw from "./Pages/Resetpsw";
import Signup from "./Pages/signup/Signup";
import Newvcard from "./Pages/vcard/newvcard/Newvcard";
import Basicdetails from "./Pages/editvcard/basicdetails/Basicdetails";
import Businesshours from "./Pages/editvcard/businesshours/Businesshours";
import Viewservices from "./Pages/editvcard/services/Viewservices";
import Viewproducts from "./Pages/editvcard/products/Viewproducts";
import Apoinments from "./Pages/editvcard/appoinments/Apoinments";
import Sociallink from "./Pages/editvcard/sociallinks/Sociallink";
import Templates from "./Pages/editvcard/vcardtemplates/Templates";
import Viewtextimonial from "./Pages/editvcard/testimonials/Viewtextimonial";
import Editvcard from "./Pages/editvcard/Editvcard";
import Addproduct from "./Pages/editvcard/products/Addproduct";
import Addservice from "./Pages/editvcard/services/Addservice";
import Editservice from "./Pages/editvcard/services/Editservice";
import Addnewvacard from "./Pages/vcard/addnewvacard";






function App() {

  
  // const userdata =sessionStorage.getItem("user")

  //   console.log(userdata);
  //   if(userdata === null){
  //     return <Loginpage/>
  //   }
   
  return (
    <div className="root-container">
      <aside>
        <Sidebar />
      </aside>
      <div className="main-container">
        <Topbar />
        
        <main>
        
          <Routes>
            {/* <Route path="/" element={<Loginpage />} /> */}
            {/* <Route path="/home" element={<Home />} /> */}
            <Route path="/vcard" element={<Vcard />} />
            <Route path="/reset" element={<Resetpsw />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/newvcard" element={<Addnewvacard/>} />
            <Route path="/basicdetails" element={<Basicdetails />} />
            <Route path="/templates" element={<Templates/>} />
            <Route path="/business" element={<Businesshours />} />
            <Route path="/services" element={<Viewservices />} />
            <Route path="/products" element={<Viewproducts />} />
            <Route path="/testimonial" element={<Viewtextimonial/>  } />
            <Route path="/sociallink" element={<Sociallink/>} />
            <Route path="/apoinments" element={<Apoinments/>} />
            <Route path="/editvcard" element={<Editvcard/>} />
            <Route path="/addproduct" element={<Addproduct/>} />
            <Route path="/addservice" element={<Addservice/>} />
            <Route path="/update/:id" element={<Editservice/>} />
          

          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
