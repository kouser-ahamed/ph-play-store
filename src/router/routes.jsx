import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Homepage from "../components/pages/homepage/Homepage";
import Apps from "../components/pages/apps/Apps";
import InstallApps from "../components/pages/installApps/InstallApps";
import NotFoundPage from "../components/pages/NotFoundPage/NotFoundPage";
import AppDetails from "../components/pages/appDetails/AppDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        element: <Homepage> </Homepage>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/apps",
        element: <Apps> </Apps>,
      },
      {
        path: "/apps/:id",
        element: <AppDetails>   </AppDetails>
      },

      {
        path: "/installedApps",
        element: <InstallApps> </InstallApps>,
      },
    ],
    errorElement: <NotFoundPage> </NotFoundPage>,
  },
]);
