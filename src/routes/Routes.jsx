import { createBrowserRouter } from "react-router-dom";
import Blog from "../Pages/Blog";
import ChefRecpiesDetails from "../Pages/ChefRecpiesDetails";
import Error from "../Pages/Error";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Shared/Home";
import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute";

/* eslint-disable no-unused-vars */
const router = createBrowserRouter([
  {
    path: "",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "/chefrecpiesdata/:id",
        element: (
          <PrivateRoute>
            <ChefRecpiesDetails></ChefRecpiesDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://chef-receipe-hunter-server-69grac9y9.vercel.app/chefrecpiesdata/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
