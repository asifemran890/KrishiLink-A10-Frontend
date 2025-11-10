import { createBrowserRouter } from "react-router";
// import Profile from "../Pages/Profile/Profile";
import MainLayout from "../Componets/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import Profile from "../Pages/Profile,/Profile";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        // loader: () => fetch("http://localhost:3000/model"),
      },
      // {
      //   path: "/all-models",
      //   element: <AllModels />,
      //   loader: () => fetch("http://localhost:3000/model"),
      // },
      {
        path: "/profile",
        element: (
          // <PrivateRoute>
          <Profile />
          //</PrivateRoute>
        ),
      },
      // {
      //   path: "/add-model",
      //   element: (
      //     <PrivateRoute>
      //       <AddModel />
      //     </PrivateRoute>
      //   ),
      // },
      // {
      //   path: "/model-details/:id",
      //   element: (
      //     <PrivateRoute>
      //       <ModelDetails />
      //     </PrivateRoute>
      //   ),
      // },

      // {
      //   path: "/my-models",
      //   element: (
      //     <PrivateRoute>
      //       <MyModels />
      //     </PrivateRoute>
      //   ),
      // },

      // {
      //   path: "/my-downloads",
      //   element: (
      //     <PrivateRoute>
      //       <MyDownloads />
      //     </PrivateRoute>
      //   ),
      // },

      // {
      //   path: "/update-model/:id",
      //   element: (
      //     <PrivateRoute>
      //       <UpdateModel />
      //     </PrivateRoute>
      //   ),
      //   loader: ({ params }) =>
      //     fetch(`http://localhost:3000/model/${params.id}`),
      // },
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
]);
