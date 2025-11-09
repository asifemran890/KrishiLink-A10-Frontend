import { createBrowserRouter } from "react-router";
import Error from "../Pages/Error/Error";
import Layout from "../Componets/Layout";
import Register from "../Pages/Auth/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/Register",
        element: <Register />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);
