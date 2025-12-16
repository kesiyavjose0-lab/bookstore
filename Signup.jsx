import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    place: "",
    age: "",
    email: "",
    phone: "",
    password: "",
    Education: "",
    Contactdetails: "",
  });
  const [terms, setTerms] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      setError("Name, Email, and Password are required!");
      return;
    }

    if (!terms) {
      setError("You must agree to the Terms and Conditions!");
      return;
    }

    console.log("Form submitted:", form);
    navigate("/home");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200">
      <div className="bg-white rounded-2xl shadow-2xl flex overflow-hidden max-w-4xl w-full">
        {/* Left side: welcome message */}
        <div className="hidden md:flex w-1/2 bg-purple-700 text-white flex-col items-center justify-center p-10">
          <div className="text-8xl mb-4 select-none">📚</div>
          <h2 className="text-3xl font-bold mb-2">Join BookWorld</h2>
          <p className="text-center text-gray-200">
            Create your account to explore thousands of books, track your reading, and manage your library easily!
          </p>
        </div>

        {/* Right side: signup form */}
        <div className="w-full md:w-1/2 p-10">
          <h1 className="text-3xl font-bold text-purple-700 mb-6 text-center">Signup</h1>

          {error && <p className="text-red-500 mb-3 text-center">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
              className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <input
              type="text"
              name="place"
              placeholder="Place"
              value={form.place}
              onChange={handleChange}
              className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={form.age}
              onChange={handleChange}
              className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={form.phone}
              onChange={handleChange}
              className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
              className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <input
              type="text"
              name="Education"
              placeholder="Education"
              value={form.Education}
              onChange={handleChange}
              className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <input
              type="text"
              name="Contactdetails"
              placeholder="Contact Details"
              value={form.Contactdetails}
              onChange={handleChange}
              className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />

            {/* Terms & Conditions */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={terms}
                onChange={(e) => setTerms(e.target.checked)}
                id="terms"
                className="w-4 h-4"
              />
              <label htmlFor="terms" className="text-gray-700 text-sm">
                I agree to the{" "}
                <a href="/terms" className="text-purple-700 hover:underline">
                  Terms and Conditions
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-purple-700 text-white rounded-lg font-semibold hover:bg-purple-800 transition"
            >
              Signup
            </button>
          </form>

          <p className="text-center mt-6 text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-purple-700 font-medium hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
