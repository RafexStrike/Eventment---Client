import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/Authentication/AuthContext";
import { Link, useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import LottieReact from "../LottieReact/LottieReact";
const Login = () => {
  const { logIn, isLoadingDone, logInWithGoogle } = useContext(AuthContext);

  const gonnaSendYou = useNavigate();
  const whereYouWannaGo = useLocation();
  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    logIn(email, password)
      .then((result) => {
        console.log("you have logged in successfully", result);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "You have logged in successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        gonnaSendYou(whereYouWannaGo?.state || "/");
      })
      .catch((error) => {
        console.log("sorry there has been an error!", error);
        Swal.fire({
          position: "center",
          icon: "error",
          title: "There has been an error. Please try again.",
          showConfirmButton: false,
          timer: 500,
        });

        gonnaSendYou(0);
      });
  };
  const handleGoogleLogIn = (event) => {
    event.preventDefault();
    logInWithGoogle()
      .then((result) => {
        console.log("you have logged in successfully", result);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "You have logged in successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        gonnaSendYou(whereYouWannaGo?.state || "/");
      })
      .catch((error) => {
        console.log("sorry there has been an error!", error);
        Swal.fire({
          position: "center",
          icon: "error",
          title: "There has been an error. Please try again.",
          showConfirmButton: false,
          timer: 500,
        });

        gonnaSendYou(0);
      });
  };

  if (!isLoadingDone) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LottieReact></LottieReact>
      </div>
    );
  }
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <h1 className="mb-8 text-2xl font-bold text-center">
                Login now <br />{" "}
                <span className="text-lg font-normal">
                  and never miss an update!
                </span>
              </h1>
              <form onSubmit={handleLogin}>
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <Link to={`/signup`} className="link link-hover">
                    Don't have an account?
                  </Link>
                </div>
                <button className="btn btn-neutral mt-4 w-full">Login</button>
              </form>

              {/* google login button starts */}
              <div>
                <div className="flex items-center gap-4 my-4">
                  <div className="flex-grow h-px bg-gray-300"></div>
                  <span className="text-sm text-gray-500">
                    or continue with
                  </span>
                  <div className="flex-grow h-px bg-gray-300"></div>
                </div>
              </div>
              <button
                onClick={handleGoogleLogIn}
                className="btn bg-[#E4D8B4] text-black border-[#e5e5e5]"
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
                Google
              </button>
              {/* google login button ends */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
