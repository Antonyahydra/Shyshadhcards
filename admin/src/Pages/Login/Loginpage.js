import { Button, Input } from "antd";
import React, { useEffect, useState } from "react";
import "./loginpage.css";
import { Link, useNavigate } from "react-router-dom";
import Signup from "../../components/login/Signup";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/users/Userslice";

const dusername = "";
const dpassword = "";

function Loginpage() {
  const [logincontainer, setLogincontainer] = useState(false);
  const [uname, setuname] = useState("");
  const [password, setPassword] = useState("");
  // skljdfgljkshkdfj
  const dispatch = useDispatch();
  const { isLoading, isError, isSuccess, userData } = useSelector(
    (state) => state.userDatax
  );

  const Navigate = useNavigate();

  const loginContainerDom = () => {
    return (
      <div>
        <h2 style={{ color: "blue", textAlign: "center" }}> Sign In</h2>

        <Input
          placeholder="Email-id"
          onChange={(e) => setuname(e.target.value)}
        />
        <Input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <label style={{ marginRight: "100px" }}>
            <input type="checkbox" />
            Remember Me
          </label>
          <Link to={"/Reset"}>Forgot password?</Link>
        </div>
        <Button loading={isLoading} type="primary" onClick={loginaction}>
          Login
        </Button>
        <div className="login-bottom">
          New Here?
          <div
            onClick={() => {
              setLogincontainer(false);
            }}
          >
            Create an Account
          </div>
        </div>
      </div>
    );
  };

  const signUpContainerDom = () => {
    return (
      <div>
        {/* <input placeholder="Uname" />
        <input placeholder="Password" /> */}
        <Signup />

        <button
          className="btn btn-primary"
          onClick={() => setLogincontainer(true)}
        >
          Back to login
        </button>
      </div>
    );
  };

  const loginaction = () => {
    const logindata = {
      username: uname,
      password: password,
    };
    console.log(logindata);
    dispatch(login(logindata));
  };


  useEffect(()=>{
    if(isSuccess)
    {
      Navigate('/home')
      sessionStorage.setItem('user',JSON.stringify(userData)
)
    }
  },[isSuccess])

  return (
    <div>
      <div className="box-container">
        <div className="Login-container">
          {logincontainer ? loginContainerDom() : signUpContainerDom()}
        </div>
      </div>
    </div>
  );
}

export default Loginpage;
