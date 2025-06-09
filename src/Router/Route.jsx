import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Signup from "../Components/Signup/Signup";
import PrivateRoute from "./PrivateRoute";
import CreateGroupPage from "../Pages/CreateGroupPage";
import AllGroups from "../Pages/AllGroups";
import GroupDetails from "../Components/Group/GroupDetails";
import MyGroups from "../Components/Group/MyGroups";
import MyGroupUpdate from "../Components/Group/MyGroupUpdate";
import { Suspense } from "react";
import ErrorPage from "../Pages/ErrorPage";
import ShowMyJoinedGroups from "../Components/GroupFunctionalities/showMyJoinedGroups";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/createGroup",
        element: (
          <PrivateRoute>
            <CreateGroupPage></CreateGroupPage>
          </PrivateRoute>
        ),
      },
      {
        path: "/groups",
        loader: () => fetch("http://localhost:3000/events/get"),
        element: <AllGroups></AllGroups>,
      },
      {
        path: "/groups/get/:groupID",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/events/get/${params.groupID}`),
        element: (
          <PrivateRoute>
            <GroupDetails></GroupDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/myGroups/get",
        loader: () => fetch(`http://localhost:3000/events/get`),
        element: (
          <Suspense
            fallback={
              <div>
                {" "}
                <div className="flex justify-center items-center h-screen">
                  <h2>loading......</h2>
                  <span className="loading loading-ball loading-xs"></span>
                  <span className="loading loading-ball loading-sm"></span>
                  <span className="loading loading-ball loading-md"></span>
                  <span className="loading loading-ball loading-lg"></span>
                  <span className="loading loading-ball loading-xl"></span>
                </div>
              </div>
            }
          >
            <PrivateRoute>
              <MyGroups />
            </PrivateRoute>
          </Suspense>
        ),
      },
      {
        path: "/myGroups/update/:groupID",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/events/get/${params.groupID}`),
        element: (
          <PrivateRoute>
            <MyGroupUpdate />
          </PrivateRoute>
        ),
      },
      {
        path: `/myJoinedEvents`,
        element: (
          <PrivateRoute>
            <ShowMyJoinedGroups></ShowMyJoinedGroups>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
