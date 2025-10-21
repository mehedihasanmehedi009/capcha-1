import { Link } from "react-router";
import logo from "../assets/firebase-logo.png";
import MyContainer from "./MyContainer/MyContainer";
import MyLink from "./MyLink/MyLink";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { toast } from "react-toastify";
import { ClockLoader } from "react-spinners";

const Navbar = () => {
  const { users, signOutfun, setUser, Loading } = useContext(AuthContext);
  const hendelsignout = () => {
    signOutfun()
      .then(() => {
        toast.success("SignOut success Full");
        setUser(false);
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };
  // console.log(result)
  return (
    <div className="bg-slate-100f py-2 border-b border-b-slate-300 ">
      <MyContainer className="flex items-center justify-between">
        <figure>
          <img src={logo} className="w-[55px]" />
        </figure>
        <ul className="flex items-center gap-2">
          <li>
            <MyLink to={"/"}>Home</MyLink>
          </li>
          <li>
            <MyLink to={"/about"}>About US</MyLink>
          </li>
          <li>
            <MyLink to={"/profile"}>Profile</MyLink>
          </li>
        </ul>

        {Loading ? (
          <ClockLoader color="red" />
        ) : users ? (
          <div className="text-center space-y-3">
            <details className="dropdown">
              <summary className="btn m-1">
                {" "}
                <img
                  src={users?.photoURL || "https://via.placeholder.com/88"}
                  className="h-12 w-12 rounded-full mx-auto"
                  alt=""
                />
              </summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <h2 className="text-xl font-semibold">{users?.displayName}</h2>
                <p className="text-white/80">{users?.email}</p>
                <button onClick={hendelsignout} className="my-btn">
                  Sign Out
                </button>
              </ul>
            </details>
          </div>
        ) : (
          <button className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold cursor-pointer">
            <Link to={"/signup"}>Sign in</Link>
          </button>
        )}
      </MyContainer>
    </div>
  );
};

export default Navbar;
