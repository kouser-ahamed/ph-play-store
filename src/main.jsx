import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import RootLayout from "./layout/RootLayout";
import Apps from "./components/pages/apps/Apps";
import InstallApps from "./components/pages/installApps/InstallApps";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        path: "/",
        element: <h2>HomePage</h2>,
      },
      {
        path: "/apps",
        element: <Apps> </Apps>
      },
      {
        path: "/installedApps",
        element: <InstallApps> </InstallApps>
      }
    ],
    errorElement: <h2>404 This page not found...!</h2>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
