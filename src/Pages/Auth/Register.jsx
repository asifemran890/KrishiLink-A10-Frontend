import { Link } from "react-router";
import { AuthContext } from "../../context/AuthContext";

import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { toast } from "react-toastify";
import { useState } from "react";
import { FaEye } from "react-icons/fa6";
import { IoEyeOff } from "react-icons/io5";
const googleprovider = new GoogleAuthProvider();

const Register = () => {
  const [show, setShow] = useState(false);
  // const { createUser, updateUserProfile, signInWithGoogle } = use(AuthContext);
  // const navigate = useNavigate();
  const handleRegister = (event) => {
    event.preventDefault();
    const displayName = event.target.displayName.value;
    const email = event.target.email.value;
    const photoURL = event.target.photoURL.value;
    const password = event.target.password.value;
    console.log("register asif", { displayName, email, photoURL, password });

    // password validation
    if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one uppercase letter.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      toast.error("Password must contain at least one lowercase letter.");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        // updateUserProfile(displayName, photoURL);
        toast.success("User register successfully!");
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

  return (
    <div className="card bg-base-100 w-full mt-5 mb-5 mx-auto max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl font-bold text-center">Create Your Account</h1>
        <form onSubmit={handleRegister}>
          <fieldset className="fieldset ">
            {/* email field */}
            <label className="label">Name</label>
            <input
              type="text"
              name="displayName"
              className="input rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Name"
            />
            {/* email field */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Email"
            />
            <label className="label">PhotoURL</label>
            <input
              type="text"
              name="photoURL"
              className="input rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Photo URL"
            />

            {/* password field */}
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
            <Link className="btn text-white mt-4 rounded-full bg-linear-to-r bg-[#04AA6D] hover:bg-cyan-300">
              Register
            </Link>
          </fieldset>
        </form>
        <Link
          onClick={handleGoogleSignIn}
          className="btn bg-white text-black border-[#e5e5e5]"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </Link>

        <p className="text-center">
          Already have an account? Please{" "}
          <Link className="text-blue-500 hover:text-blue-800" to="/login">
            Login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Register;
