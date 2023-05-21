import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import AllToys from "../pages/AllToys/AllToys";
import AddToy from "../pages/AddToy/AddToy";
import MyToys from "../pages/MyToys/MyToys";
import Registration from "../pages/Registration/Registration";
import Login from "../pages/Login/Login";
import Blogs from "../pages/Blogs/Blogs";
import PrivateRoute from "./PrivateRoute";
import ViewDetails from "../pages/ViewDetails/ViewDetails";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/allToys",
          element: <AllToys></AllToys>
        },
        {
          path: "/blogs",
          element: <Blogs></Blogs>
        },
        {
          path: "/myToys",
          element: <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        },
        {
          path: "/addToy",
          element: <AddToy></AddToy>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Registration></Registration>
        },
        {
          path: ":id",
          element: (
          <PrivateRoute>
           <ViewDetails></ViewDetails>
          </PrivateRoute>
          )
        },
      ]
    },
  ]);

  export default router;