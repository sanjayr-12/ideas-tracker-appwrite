import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { account } from "../appwrite/appwrite";
import Auth from "../Auth";
import { useStore } from "../store/auth";

const ProtectRoutes = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const setUser = useStore((state) => state.setUser);
  const user = useStore((state) => state.user);
  useEffect(() => {
    async function getUser() {
      try {
        const check = await account.get();
        setUser(check);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setUser(null);
        navigate("/auth");
      }
    }
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return <div>{user ? <Outlet /> : <Auth />}</div>;
};

export default ProtectRoutes;
