import { createBrowserRouter } from "react-router";
import MainLayout from "../Componets/MainLayout";
import Login from "../Pages/Auth/Login";
import Home from "../Componets/Home/Home";
import Register from "../Pages/Auth/Register";
import PrivateRoute from "./PrivateRoute";
import NotFoundPage from "../Pages/Error/NotFoundPage";
import AddCrops from "../Pages/Add Crops/AddCrops";
import MyPosts from "../Pages/My Posts/MyPosts";
import MyInterests from "../Pages/MyInterests/MyInterests";
import AllCropsDetails from "../Pages/All-crops-Details/AllCropsDetails";
import AllCrops from "../Pages/All Crops/AllCrops";
import CropsDetails from "../Pages/CropDetails/CropsDetails";
import MyProfile from "../Pages/MyProfile/MyProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("https://backend-bay-tau-10.vercel.app/latest-post"),
      },
      {
        path: "/AllCrops",
        element: <AllCrops />,
        loader: () => fetch("https://backend-bay-tau-10.vercel.app/crops"),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/crops/:id",
        loader: ({ params }) =>
          fetch(`https://backend-bay-tau-10.vercel.app/crops/${params.id}`),
        element: (
          <PrivateRoute>
            <CropsDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/AddCrops",
        element: (
          <PrivateRoute>
            <AddCrops />
          </PrivateRoute>
        ),
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
