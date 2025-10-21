import React, { useContext, useState } from "react";
import MyContainer from "../MyContainer/MyContainer";
import { Link } from "react-router";
import { sendEmailVerification, updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
// import { createContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const SignUp = () => {
  const [hiden, setHiden] = useState(false);
  const { sendEmailVerificationfun ,createUserWithEmailAndPasswordfun, updateProfilefun } =
    useContext(AuthContext);
  const handleSignup = (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const photoURL = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log("sing up fuction", { email, password, displayName, photoURL });

    // const pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;
    // if (!pattern.test(password)) {
    //   toast.error(
    //     "Password must have at least 6 characters, 1 uppercase letter, and 1 number!"
    //   );
    //   return;
    // }

    createUserWithEmailAndPasswordfun(email, password)
      .then((res) => {
        updateProfilefun(displayName, photoURL)
          .then(() => {
            console.log(res)
                sendEmailVerificationfun() 
              .then((res) => {
                console.log(res);
                toast.success("Aer You check  Acount verification Email ");
              })
              .catch((e) => {
                toast.error(e.massage);
              });
          })
          .catch((e) => {
            toast.error(e.massage);
          });
      })
      .catch((e) => {
        console.log(e.code);
        if (e.code == "auth/email-already-in-use") {
          toast.error("popup closed by user");
        }
      });
  };
  const hendel = () => {
    setHiden(!hiden);
  };
  return (
    <div className="min-h-[96vh] flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 relative overflow-hidden">
      {/* Animated floating circles */}
      <div className="absolute inset-0">
        <div className="absolute w-72 h-72 bg-pink-400/30 rounded-full blur-2xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-purple-400/30 rounded-full blur-2xl bottom-10 right-10 animate-pulse"></div>
      </div>

      <MyContainer>
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-6 lg:p-10 text-white">
          <div className="max-w-lg text-center lg:text-left">
            <h1 className="text-5xl font-extrabold drop-shadow-lg">
              Create Your Account
            </h1>
            <p className="mt-4 text-lg text-white/80 leading-relaxed">
              Join our community and unlock exclusive features. Your journey
              begins here!
            </p>
          </div>

          <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-center text-white">
              Sign Up
            </h2>

            <form onSubmit={handleSignup} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Photo</label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Your Photo URl"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>

              <div className="relative">
                <label className="block text-sm font-medium mb-1">
                  Password
                </label>
                <input
                  type={hiden ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
                <span
                  onClick={hendel}
                  className="absolute right-[8px] top-[36px] cursor-pointer z-50"
                >
                  {hiden ? <FaEye /> : <IoEyeOff />}
                </span>
              </div>

              <button type="submit" className="my-btn">
                Sign Up
              </button>

              <div className="text-center mt-3">
                <p className="text-sm text-white/80">
                  Already have an account?{" "}
                  <Link
                    to="/signin"
                    className="text-pink-300 hover:text-white font-medium underline"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default SignUp;
