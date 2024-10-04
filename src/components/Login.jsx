import { useState } from "react";
import { account } from "../appwrite/appwrite";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  async function Login(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    try {
      const loggedIn = await account.createEmailPasswordSession(
        email,
        password
      );
      setUser(loggedIn);
      navigate("/");
      console.log(user);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <form onSubmit={Login}>
        <h1>Login</h1>
        <input type="text" name="email" />
        <br />
        <input type="password" name="password" />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
