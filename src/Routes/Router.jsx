import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import ProjectDetails from "../Components/Projects/ProjectDetails";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/project/:id",
        element: <ProjectDetails></ProjectDetails>,
      },
    ],
  },
]);

export default Router;
