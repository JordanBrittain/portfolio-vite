import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ScheduleCS from "./ScheduleCS";
import MSLiveCS from "./MSLiveCS";
import MMCS from "./MMCS";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "schedule-cs",
    element: <ScheduleCS />,
  },
  {
    path: "ms-live-cs",
    element: <MSLiveCS />,
  },
  {
    path: "meet-mgmt-cs",
    element: <MMCS />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>
);
