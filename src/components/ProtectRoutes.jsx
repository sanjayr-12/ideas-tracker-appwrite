import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { account } from "../appwrite/appwrite";
import Auth from "../Auth";

const ProtectRoutes = () => {
  const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getUser() {
      try {
          const check = await account.get();
          setLoading(false)
        setUser(check);
      } catch (error) {
        console.error(error);
          setUser(null);
        navigate("/auth");
      }
      }
    getUser();
  }, [navigate]);

    if (loading) {
        return <p>Loading...</p>
    }
    
  return <div>{user ? <Outlet /> : <Auth />}</div>;
};

export default ProtectRoutes;
