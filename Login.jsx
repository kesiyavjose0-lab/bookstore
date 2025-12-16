import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Admin login
    if (email === "admin@gmail.com" && password === "admin123") {
      localStorage.setItem("role", "admin");
      navigate("/admin");
    }
    // User login
    else if (email === "user@gmail.com" && password === "1234") {
      localStorage.setItem("role", "user");
      navigate("/home");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200">
      {/* Login card */}
      <div className="bg-white rounded-2xl shadow-2xl flex overflow-hidden max-w-4xl w-full mx-4">
        {/* Left section */}
        <div className="hidden md:flex w-1/2 bg-purple-700 text-white flex-col items-center justify-center p-10">
          <div className="text-8xl mb-4 select-none">📚</div>
          <h2 className="text-3xl font-bold mb-2">
            Welcome to BookWorld
          </h2>
          <p className="text-center text-gray-200">
            Discover thousands of books, explore new genres, and manage your
            library easily!
          </p>
        </div>

        {/* Right section */}
        <div className="w-full md:w-1/2 p-10">
          <h1 className="text-3xl font-bold text-purple-700 mb-6 text-center">
            Login
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="border w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="border w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-purple-700 text-white rounded-lg font-semibold hover:bg-purple-800 transition"
            >
              Login
            </button>
          </form>

          <p className="text-center mt-6 text-gray-600">
            Don&apos;t have an account?{" "}
            <Link
              to="/signup"
              className="text-purple-700 font-medium hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
