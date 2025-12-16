import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";
import Profile from "./pages/Profile";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/AdminLogin";

const AppContent = () => {
  const location = useLocation();
  const hideNavbar = location.pathname === "/" || location.pathname === "/signup" || location.pathname === "/admin-login";

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/books" element={<Navigate to="/home" />} /> {/* Redirect /books → /home */}
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route
          path="/admin"
          element={
            localStorage.getItem("role") === "admin" ? (
              <AdminDashboard />
            ) : (
              <div className="text-center mt-20 text-2xl text-red-600">
                ❌ Access Denied — Admins Only
              </div>
            )
          }
        />
        <Route path="*" element={<Navigate to="/" />} /> {/* Redirect unknown routes */}
      </Routes>
    </>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
