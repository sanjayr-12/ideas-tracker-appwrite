import { useState } from "react";
import { account } from "../appwrite/appwrite";
import { ID } from "appwrite";

const Signup = () => {
  const [user, setUser] = useState(null);

  async function register(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    try {
      const loggedIn = await account.create(ID.unique(), email, password);
      setUser(loggedIn);
      console.log(user);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <form onSubmit={register}>
        <h1>SignUp</h1>
        <input type="text" name="email" />
        <br />
        <input type="password" name="password" />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Signup;
