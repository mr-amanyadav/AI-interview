import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const navigate = useNavigate();

  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        <Link
          to="/"
          className="text-2xl font-bold"
        >
          AI Interview Assistant
        </Link>

        <div className="flex items-center gap-6">

          <Link to="/">
            Home
          </Link>

          <Link to="/history">
            History
          </Link>

          {user && (
            <>
              <span>
                Welcome, <b>{user.name}</b>
              </span>

              <button
                onClick={handleLogout}
                className="bg-white text-indigo-600 px-4 py-2 rounded-lg"
              >
                Logout
              </button>
            </>
          )}

        </div>

      </div>
    </nav>
  );
}

export default Navbar;