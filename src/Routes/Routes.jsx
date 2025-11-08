import { createBrowserRouter } from "react-router";
import Error from "../Pages/Error";
import Navber from "../Componets/Navber";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navber />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);
