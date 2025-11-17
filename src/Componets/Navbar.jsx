import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import MyLink from "../Componets/MyLink";
import logo from "../assets/img/KrishiLink.png";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className=" sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img className="w-10 h-10 rounded-3xl" src={logo} alt="logo" />
          <h1 className="text-xl text-black font-semibold">KrishiLink</h1>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl "
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Navigation */}
        <nav
          className={`md:flex md:space-x-3  md:static absolute left-0 w-full  md:w-auto transition-all duration-300 ${
            menuOpen
              ? "top-16 opacity-100 bg-emerald-700 "
              : "top-[-400px] opacity-0 md:opacity-100"
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-center lg:gap-5 space-y-4 md:space-y-0 p-4 md:p-0">
            <MyLink
              className="hover:underline"
              to="/"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </MyLink>

            <MyLink
              className="hover:underline"
              to="/AllCrops"
              onClick={() => setMenuOpen(false)}
            >
              All Crops
            </MyLink>

            {user ? (
              <>
                <MyLink
                  className="hover:underline"
                  to="/profile"
                  onClick={() => setMenuOpen(false)}
                >
                  Profile
                </MyLink>

                <MyLink
                  className="hover:underline"
                  to="/AddCrops"
                  onClick={() => setMenuOpen(false)}
                >
                  Add Crops
                </MyLink>

                <MyLink
                  className="hover:underline"
                  to="/MyPosts"
                  onClick={() => setMenuOpen(false)}
                >
                  My Posts
                </MyLink>

                <MyLink
                  className="hover:underline"
                  to="/MyInterests"
                  onClick={() => setMenuOpen(false)}
                >
                  My Interests
                </MyLink>
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle tooltip tooltip-bottom avatar border border-gray-300 hover:scale-105 transition"
                  data-tip={user.displayName}
                >
                  <div className="w-10 rounded-full">
                    <img src={user.photoURL} alt="User Avatar" />
                  </div>
                </div>
                <button
                  className="mt-2 md:mt-0 md:ml-2 px-3 py-1 bg-[#04AA6D] hover:bg-cyan-300 rounded transition bg-linear-to-r "
                  onClick={() => {
                    signOutUser();
                    setMenuOpen(false);
                  }}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <MyLink
                  className="hover:underline"
                  to="/profile"
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </MyLink>

                <MyLink
                  className="hover:underline"
                  to="/register"
                  onClick={() => setMenuOpen(false)}
                >
                  Register
                </MyLink>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
