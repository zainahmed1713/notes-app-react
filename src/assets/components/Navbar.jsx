import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, dispatch } = useAuthContext();

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    dispatch({ type: "LOGOUT" });
    window.location.assign("/login");
  };

  return (
    <nav className="h-14 flex justify-between items-center p-3 bg-[#F5F5F5]">
      <div className="logo">
        <Link to="/">
          <h1 className="font-montserrat text-[#203562] font-semibold">
            Notes App
          </h1>
        </Link>
      </div>
      {user ? (
        <div>
          <span className="hidden email font-montserrat text-[#203562] font-semibold">
            {user}
          </span>
          <button
            className="bg-[#203562] font-montserrat font-semibold text-white text-xs p-2 rounded-xl w-20"
            onClick={logout}
          >
            Log out
          </button>
        </div>
      ) : (
        <div>
          <Link
            to="/login"
            className="font-montserrat text-sm text-[#203562] font-semibold mr-2 hover:opacity-80"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="font-montserrat text-sm text-[#203562] font-semibold hover:opacity-80"
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
