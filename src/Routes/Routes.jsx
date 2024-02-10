import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "checkOut/:id",
        element: <CheckOut></CheckOut>,
        loader: ({ params }) => fetch(`https://dummyjson.com/users/${params.id}`),
      },
    ],
  },
]);

export default router;
