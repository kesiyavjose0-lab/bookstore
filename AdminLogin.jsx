import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "admin@gmail.com" && password === "admin123") {
      localStorage.setItem("role", "admin");
      navigate("/admin");
    } else {
      alert("Invalid Admin Credentials!");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-center text-2xl mb-4 font-bold text-red-600">Admin Login</h2>
        <input className="border w-full p-2 mb-3" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
        <input className="border w-full p-2 mb-3" placeholder="Password" type="password" onChange={(e)=>setPassword(e.target.value)} />
        <button className="w-full bg-red-600 text-white p-2 rounded">Login</button>
      </form>
    </div>
  );
}
