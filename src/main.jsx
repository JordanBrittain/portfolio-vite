import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import DSCS from "./DSCS";
import MCCS from "./MCCS";
import IACS from "./IACS";
import About from "./About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "design-system-cs",
    element: <DSCS />,
  },
  {
    path: "meet-creation-cs",
    element: <MCCS />,
  },
  {
    path: "information-architecture-cs",
    element: <IACS />,
  },
  {
    path: "about",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>
);
