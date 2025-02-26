import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AdminDashboard } from "./components/AdminDashboard";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Router>
      <Routes>
        {/* Admin Login Route */}
        <Route path="/admin/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        
        {/* Admin Dashboard Route - Protected */}
        <Route
          path="/admin"
          element={isAuthenticated ? <AdminDashboard /> : <Navigate to="/admin/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
