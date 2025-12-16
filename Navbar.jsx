import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ isAdmin }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any auth/session info here
    // For now, just redirect to login
    navigate("/login");
  };

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <Link to="/home" className="text-lg font-semibold hover:text-yellow-400">
          Home
        </Link>
        <Link to="/books" className="text-lg font-semibold hover:text-yellow-400">
          Books
        </Link>
        <Link to="/profile" className="text-lg font-semibold hover:text-yellow-400">
          Profile
        </Link>
      </div>

      <div className="flex items-center gap-4">
        {isAdmin && (
          <Link
            to="/admin"
            className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
          >
            Admin
          </Link>
        )}
        <button
          onClick={handleLogout}
          className="bg-yellow-500 px-3 py-1 rounded hover:bg-yellow-600"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
