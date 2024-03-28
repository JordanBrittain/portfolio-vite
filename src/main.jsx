import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import DSCS from "./DSCS";
import MCCS from "./MCCS";

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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>
);
