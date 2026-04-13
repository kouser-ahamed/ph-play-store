import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import RootLayout from "./layout/RootLayout";
import Apps from "./components/pages/apps/Apps";
import InstallApps from "./components/pages/installApps/InstallApps";
import NotFoundPage from "./components/pages/NotFoundPage/NotFoundPage";
import Homepage from "./components/pages/homepage/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        element: <Homepage> </Homepage>,
        loader: ()=> fetch('/data.json')
  
      },
      {
        path: "/apps",
        element: <Apps> </Apps>,
      },
      {
        path: "/installedApps",
        element: <InstallApps> </InstallApps>
      }
    ],
    errorElement: <NotFoundPage> </NotFoundPage>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
