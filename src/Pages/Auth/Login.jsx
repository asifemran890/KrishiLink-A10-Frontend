// import { use } from "react";
import { Link, Links, Navigate, useLocation } from "react-router";
// import { AuthContext } from "../../context/AuthContext";
import { FaGoogle } from "react-icons/fa";
import { useState } from "react";
import { IoEyeOff } from "react-icons/io5";
import { FaEye } from "react-icons/fa6";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../../firebase/firebase.config";

const googleprovider = new GoogleAuthProvider();

const Login = () => {
  const [user, setUser] = useState(null);
  const [show, setShow] = useState(false);
  // const { signInUser, signInWithGoogle } = use(AuthContext);

  const location = useLocation();
  // const navigate = useNavigate();
  console.log(location);

  const handleLogIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log("login ", { email, password });
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        // updateUserProfile(displayName, photoURL);
        toast.success("Login successfully!");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleprovider)
      .then((result) => {
        console.log(result.user);
        toast.success("Login successfully!");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };
  console.log(user);

  return (
    <div className="card bg-base-100  w-full mx-auto max-w-sm shrink-0 shadow-2xl border border-gray-200">
      <div className="card-body">
        <h1 className="text-3xl font-bold text-center">Login</h1>
        {user ? (
          "profile"
        ) : (
          <form onSubmit={handleLogIn}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Email"
              />
              <div className="relative">
                <label className="label">Password</label>
                <input
                  type={show ? "test" : "password"}
                  name="password"
                  className="input rounded-full focus:border-0 focus:outline-gray-200"
                  placeholder="Password"
                />
                <span
                  onClick={() => setShow(!show)}
                  className="absolute right-[30px] top-[30px] cursor-pointer z-50"
                >
                  {show ? <FaEye /> : <IoEyeOff />}
                </span>
              </div>
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn text-white mt-4 rounded-full bg-linear-to-r from-pink-500 to-red-600">
                Login
              </button>
            </fieldset>
          </form>
        )}

        <button
          onClick={handleGoogleSignIn}
          className="btn bg-white rounded-full text-black border-[#e5e5e5]"
        >
          <FaGoogle />
          Login with Google
        </button>
        <p className="text-center">
          New to our website? Please{" "}
          <Link className="text-blue-500 hover:text-blue-800" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
