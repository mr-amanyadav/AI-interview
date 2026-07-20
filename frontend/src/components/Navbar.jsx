import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import bg from "../assets/runner.jpg";

function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="relative overflow-hidden shadow-xl">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55 backdrop-blur-sm"></div>

      {/* Navbar Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex justify-between items-center px-8 py-5">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold tracking-wide text-white hover:text-violet-300 transition duration-300"
        >
          AI Interview Assistant
        </Link>

        {/* Menu */}
        <div className="flex items-center gap-8 text-white font-medium">
          <Link
            to="/"
            className="hover:text-violet-300 transition duration-300"
          >
            Home
          </Link>

          <Link
            to="/history"
            className="hover:text-violet-300 transition duration-300"
          >
            History
          </Link>

          {user && (
            <>
              <span className="text-gray-200">
                Welcome,&nbsp;
                <span className="font-semibold text-violet-300">
                  {user.name}
                </span>
              </span>

              <button
                onClick={handleLogout}
                className="px-5 py-2 rounded-lg bg-linear-to-r from-violet-600 to-purple-700 text-white shadow-lg hover:from-violet-700 hover:to-purple-800 hover:scale-105 transition-all duration-300"
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