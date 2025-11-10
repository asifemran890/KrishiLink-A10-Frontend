// src/components/Layout.js
import { Link, Outlet, useLocation } from "react-router";

const MainLayout = ({ user, onLogout }) => {
  const location = useLocation();

  // Don't show header/footer if on 404 page
  const hideHeaderFooter = location.pathname === "/404";

  if (hideHeaderFooter) return <Outlet />;

  return (
    <>
      {/* Header */}
      <header className="bg-green-600 text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
          {/* Logo + Project Name */}
          <div className="flex items-center space-x-3">
            {/* Use an emoji or your logo here */}
            <div className="text-2xl">🌾</div>
            <h1 className="text-xl font-semibold">KrishiLink</h1>
          </div>

          {/* Navigation Links */}
          <nav className="flex space-x-6">
            {user ? (
              <>
                <Link className="hover:underline" to="/">
                  Home
                </Link>
                <Link className="hover:underline" to="/crops">
                  All Crops
                </Link>
                <Link className="hover:underline" to="/profile">
                  Profile
                </Link>
                <Link className="hover:underline" to="/add-crop">
                  Add Crops
                </Link>
                <Link className="hover:underline" to="/my-posts">
                  My Posts
                </Link>
                <Link className="hover:underline" to="/my-interests">
                  My Interests
                </Link>
                <button
                  className="ml-2 px-3 py-1 bg-red-500 hover:bg-red-600 rounded transition"
                  onClick={onLogout}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link className="hover:underline" to="/">
                  Home
                </Link>
                <Link className="hover:underline" to="/crops">
                  All Crops
                </Link>
                <Link className="hover:underline" to="/login">
                  Login
                </Link>
                <Link className="hover:underline" to="/register">
                  Register
                </Link>
              </>
            )}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto p-4 min-h-[80vh]">
        {<Outlet />}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4 mt-auto">
        &copy; 2024 KrishiLink. All rights reserved.
      </footer>
    </>
  );
};

export default MainLayout;
