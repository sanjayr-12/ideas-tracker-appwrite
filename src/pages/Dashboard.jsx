import { account } from "../appwrite/appwrite"
import { useNavigate } from "react-router-dom"

const Dashboard = () => {
    const navigate = useNavigate()
    const handleLogout = async () => {
        try {
            const id = await account.get()
            console.log(id);
            const result = await account.deleteSession('current')
            navigate("/auth")
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }
  return (
      <div>
          <h1>Dashboard</h1>
          <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Dashboard