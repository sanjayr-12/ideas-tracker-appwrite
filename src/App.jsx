import { Routes, Route } from "react-router-dom";
import Auth from "./Auth";
import ProtectRoutes from "./components/ProtectRoutes";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route element={<ProtectRoutes />}>
        <Route path="/" element={<Dashboard />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
