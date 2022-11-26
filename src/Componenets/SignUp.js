import React, { useEffect, useRef, useState } from "react";
import Login from "./Login";
import "./SignUp.css";

const SignUp = (props) => {
  const [login, setLogin] = useState(false);
  const back = useRef();
  const [newpass, setNewpass] = useState("");
  const [confpass, setConfpass] = useState("");
  const [signlab, setSignlab] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const[userresult,SetUserresult]=useState("");
  let data = {
    firstname,
    lastname,
    username,
    newpass,
  };

  //Back to login page
  const backtoLogin = () => {
    setLogin(true);
    back.current.style.display = "none";
  };

  const getuser=()=>{
      fetch(`http://localhost:3000/Users/${username}`)
      .then((result)=>result.json)
      .then((res)=>SetUserresult(res));
  }
  //Submit handler

  const submit = (e) => {
    if (
      newpass.match(props.reg) &&
      confpass.match(newpass) &&
      newpass.match(confpass) &&
      newpass !== "" &&
      confpass !== "" &&
      firstname !== "" &&
      lastname !== "" &&
      username !== "" 
 
    ) {
      fetch("http://localhost:3000/Users", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Headers": "*",
        },
        body: JSON.stringify(data),
      }).then((response) => {
        response.json().then((resp) => {return alert(" User added Successfully")});
      });
      setSignlab(
        "User Logged in successfully. Please go to the Login page now. Now clicking on back button"
        
      );
      setFirstname("");
      setLastname("");
      setUsername("");
      setNewpass("");
      setConfpass("");
      setLogin(true);
      back.current.style.display = "none";
    } else {
      setSignlab("Please enter valid credential");
    }
  };

  useEffect(()=>{submit();},[])

  return (
    <div className="div">
      <div ref={back}>
        <h3>Sign up page</h3>
        First Name :-{" "}
        <input
          type="text"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          name="firstname"
        ></input>
        <br />
        <br />
        Last Name :-{" "}
        <input
          type="text"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          name="lastname"
        ></input>
        <br />
        <br />
        User Name :-{" "}
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          name="username"
        ></input>
        <br />
        <br />
        new Password :
        <input
          type="password"
          value={newpass}
          onChange={(e) => setNewpass(e.target.value)}
          name="newpass"
        ></input>
        <br />
        <br />
        confirm password :
        <input
          type="password"
          value={confpass}
          onChange={(e) => setConfpass(e.target.value)}
        ></input>
        <br />
        <button className="sub" onClick={submit}>
          Submit
        </button>
        <button onClick={backtoLogin}>Back</button>
        <div>
          <label>{signlab}</label>
        </div>
      </div>
      {login && <Login></Login>}
    </div>
  );
};
export default SignUp;
