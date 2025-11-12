// import { useContext } from "react";
// import { Link } from "react-router";
// import { AuthContext } from "../context/AuthContext";
// const Navbar = () => {
//   const { user, signOutUser } = useContext(AuthContext);
//   console.log(user);

//   return (
//     <>
//       {/* Header */}
//       <header className="bg-green-600 text-white sticky top-0 z-50 shadow-md">
//         <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
//           {/* Logo + Project Name */}
//           <div className="flex items-center space-x-3">
//             {/* Use an emoji or your logo here */}
//             <div className="text-2xl">🌾</div>
//             <h1 className="text-xl font-semibold">KrishiLink</h1>
//           </div>

//           {/* Navigation Links */}
//           <nav className="flex space-x-6">
//             {user ? (
//               <>
//                 <Link className="hover:underline" to="/">
//                   Home
//                 </Link>
//                 <Link className="hover:underline" to="/crops">
//                   All Crops
//                 </Link>
//                 <Link className="hover:underline" to="/profile">
//                   Profile
//                 </Link>
//                 <Link className="hover:underline" to="/add-crop">
//                   Add Crops
//                 </Link>
//                 <Link className="hover:underline" to="/my-posts">
//                   My Posts
//                 </Link>
//                 <Link className="hover:underline" to="/my-interests">
//                   My Interests
//                 </Link>
//                 <button
//                   className="ml-2 px-3 py-1 bg-red-500 hover:bg-red-600 rounded transition"
//                   onClick={signOutUser}
//                 >
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <>
//                 <Link className="hover:underline" to="/">
//                   Home
//                 </Link>
//                 <Link className="hover:underline" to="/crops">
//                   All Crops
//                 </Link>
//                 <Link className="hover:underline" to="/profile">
//                   Login
//                 </Link>
//                 <Link className="hover:underline" to="/register">
//                   Register
//                 </Link>
//               </>
//             )}
//           </nav>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Navbar;
import { useContext, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#DDF4E7] sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            className="w-10 h-10 rounded-3xl"
            src="/src/assets/img/KrishiLink.png"
            alt="logo"
          />
          <h1 className="text-xl text-black font-semibold">KrishiLink</h1>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Navigation */}
        <nav
          className={`md:flex md:space-x-6 md:static absolute left-0 w-full text-black md:w-auto transition-all duration-300 ${
            menuOpen
              ? "top-16 opacity-100"
              : "top-[-400px] opacity-0 md:opacity-100"
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-center lg:gap-5 space-y-4 md:space-y-0 p-4 md:p-0">
            <Link
              className="hover:underline"
              to="/"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>

            <Link
              className="hover:underline"
              to="/AllCrops"
              onClick={() => setMenuOpen(false)}
            >
              All Crops
            </Link>

            {user ? (
              <>
                <Link
                  className="hover:underline"
                  to="/profile"
                  onClick={() => setMenuOpen(false)}
                >
                  Profile
                </Link>

                <Link
                  className="hover:underline"
                  to="/AddCrops"
                  onClick={() => setMenuOpen(false)}
                >
                  Add Crops
                </Link>

                <Link
                  className="hover:underline"
                  to="/MyPosts"
                  onClick={() => setMenuOpen(false)}
                >
                  My Posts
                </Link>

                <Link
                  className="hover:underline"
                  to="/MyInterests"
                  onClick={() => setMenuOpen(false)}
                >
                  My Interests
                </Link>

                <button
                  className="mt-2 md:mt-0 md:ml-2 px-3 py-1 bg-red-500 hover:bg-red-600 rounded transition bg-linear-to-r from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700"
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
                <Link
                  className="hover:underline"
                  to="/profile"
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </Link>

                <Link
                  className="hover:underline"
                  to="/register"
                  onClick={() => setMenuOpen(false)}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
