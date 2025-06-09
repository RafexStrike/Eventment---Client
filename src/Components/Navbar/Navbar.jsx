import React, { useContext } from "react";
import { NavLink } from "react-router";
import { Link } from "react-router";
import ToggleThemeButton from "../Themes/ToggleThemeButton";
import "./Navbar.css";
import { AuthContext } from "../../Contexts/Authentication/AuthContext";
import Swal from "sweetalert2";
import Logo from "../Logo/Logo";
import LottieReact from "../LottieReact/LottieReact";

const Navbar = () => {
  const defaultProfilePic = "https://i.ibb.co/1dSwFqY/default-avatar.png";
  const { user, isLoadingDone, bidayPrithibi } = useContext(AuthContext);
  console.log("user from the navbar", user);
  const handleLogOut = () => {
    bidayPrithibi()
      .then(() => {
        console.log("You have been logged out successfully! We'll miss you:(");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "You have been logged out successfully! We'll miss you:(",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log("soorry there has been an error", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `An error has occured! ${error}. Please try again.`,
        });
        // isLoadingDone(true)
      });
  };
  const links = (
    <>
      <NavLink className="nav-link " to="/">
        Home
      </NavLink>
      <NavLink className={`nav-link ${user ? "hidden" : ""}`} to="/login">
        Login
      </NavLink>
      <NavLink className={`nav-link ${user ? "hidden" : ""}`} to="/signup">
        Signup
      </NavLink>
      <NavLink className="nav-link " to="/groups">
        All Groups
      </NavLink>
      <NavLink className="nav-link " to="/myGroups/get">
        My Groups
      </NavLink>
      <NavLink className="nav-link " to="/createGroup">
        Create Group
      </NavLink>
      <NavLink className="nav-link " to="/myJoinedEvents">
        Joined Events
      </NavLink>
    </>
  );

  if (!isLoadingDone) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LottieReact></LottieReact>
      </div>
    );
  }

  return (
    <div className="sticky top-0 z-50 bg-[#F3EDDC] shadow-sm rounded-xl">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-[#F3EDDC] rounded-box w-52 space-y-2"
            >
              {links}
            </ul>
          </div>
          {/* my own custom logo starts */}
          <div className="z-10 flex items-center ">
            {/* add the customized logo you build in here */}
            <Logo></Logo>
            <Link to="/" className=" text-xl font-bold">
              HobbyHub
            </Link>
          </div>
          {/* my own custom logo ends */}
        </div>

        <div className="navbar-center hidden lg:flex space-x-4">{links}</div>

        <div className="navbar-end">
          <div className="mr-2 w-10 h-10">
            <ToggleThemeButton></ToggleThemeButton>
          </div>
          {user ? (
            <div className="flex items-center gap-2 md:gap-4">
              <Link to="/profile" className="flex items-center gap-2">
                <img
                  title={user?.displayName || "User"}
                  src={
                    user?.photoURL ||
                    user?.reloadUserInfo?.photoUrl ||
                    defaultProfilePic
                  }
                  alt="Profile"
                  className="w-8 h-8 rounded-full object-cover ring-2 ring-primary"
                />
                {/* <span className="hidden md:inline text-gray-700 truncate max-w-[120px]">
                  {user.email}
                </span> */}
              </Link>
              <button
                onClick={handleLogOut}
                className="btn btn-success btn-sm md:btn-md rounded-lg"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to={`/login`}
              className="btn btn-success btn-sm md:btn-md rounded-lg"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
