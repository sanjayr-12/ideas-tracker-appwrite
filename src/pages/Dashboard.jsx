import { account } from "../appwrite/appwrite";
import { useNavigate } from "react-router-dom";
import { useStore } from "../store/auth";

const Dashboard = () => {
  const user = useStore((state) => state.user);
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const id = await account.get();
      console.log(id);
      const result = await account.deleteSession("current");
      navigate("/auth");
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(user);
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
