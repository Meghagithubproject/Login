import React, { useRef, useState } from "react";
import Button from "./Button";
import "./Login.css";
import SignUp from "./SignUp";

const Login = (props) => {
  const [input, setInput] = useState("");
  const [pass, setPass] = useState("");
  const [signUpdata, setSignUpdata] = useState(false);
  const loginPage = useRef();
  const [label,setLabel]= useState("");
let reg = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
const lableref = useRef();

 

  //for login button
  const passData = (event) => {
    setInput(event.target.value);
  };
  const passPass = (event) => {
    setPass(event.target.value);
    
  };
 
 

  const Onfuntion = (event) => {
    if (event.target.value === "Login") {
      if (input === "Megha" && pass.match(reg)) {
        console.log("Hello Megha");
        lableref.current.style.display="none";
      } else {
        console.log(
          "Please check username and password or else sign up to the page"
         
        );
        setLabel("Please check username and password or else sign up to the page");
      }
    }
  };

  //for sign up button
  const Signuppage = () => {
    console.log(signUpdata);
    setSignUpdata(true);
    loginPage.current.style.display = "none";
  };

  return (
    <div>
      <div ref={loginPage}>
        <h3 className="login">Login Page</h3>
        <label className="name">
          User Name:-{" "}
          <input type="text" value={input} onChange={passData} onChange={passData}></input>
        </label>
        <label className="pass">
          Password:-{" "}
          <input type="password" value={pass} onChange={passPass}></input>
        </label>

        <button className="bt" value="Login" onClick={(event) => Onfuntion(event)}>
          Login
        </button>

        <button className="bt1" onClick={Signuppage}>
          Sign up
        </button>
        <div>
        <label ref={lableref} className="lable">{label}</label>
       </div>
      </div>
      {signUpdata && <SignUp></SignUp>}
    </div>
  );
};
export default Login;
