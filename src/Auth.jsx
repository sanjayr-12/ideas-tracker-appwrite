import Signup from "./components/Signup";
import Login from "./components/Login";
import { useState } from "react";

const Auth = () => {
  const [check, setCheck] = useState(true);

  const handleClick = () => {
    setCheck(!check);
  };
  return (
    <div>
      {check ? <Signup /> : <Login />}
      <div onClick={handleClick}>
        {check ? <p>wanna login?</p> : <p>wanna sign up?</p>}
      </div>
    </div>
  );
};

export default Auth;
