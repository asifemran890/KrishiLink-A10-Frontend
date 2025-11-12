import { createBrowserRouter } from "react-router";
import MainLayout from "../Componets/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import Profile from "../Pages/Profile,/Profile";
import PrivateRoute from "./PrivateRoute";
import NotFoundPage from "../Pages/Error/NotFoundPage";
import AllCrops from "../Pages/All Crops/AllCrops";
import AddCrops from "../Pages/Add Crops/AddCrops";
import MyPosts from "../Pages/My Posts/MyPosts";
import MyInterests from "../Pages/MyInterests/MyInterests";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:3000/home"),
      },
      {
        path: "/AllCrops",
        element: <AllCrops />,
        loader: () => fetch("http://localhost:3000/crops"),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/AddCrops",
        element: <AddCrops />,
      },
      {
        path: "/MyPosts",
        element: <MyPosts></MyPosts>,
      },
      {
        path: "/MyInterests",
        element: <MyInterests></MyInterests>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
