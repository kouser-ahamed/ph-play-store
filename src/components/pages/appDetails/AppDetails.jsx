import React, { useState } from "react";
import { useParams } from "react-router";
import useApps from "../../../hooks/useApps";
import { HashLoader } from "react-spinners";

const AppDetails = () => {
  const { id } = useParams();

  const { apps, loading } = useApps();

  const [installedApps, setInstalledApps] = useState([]);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-[500px]">
        <HashLoader color="#ad46ff" />
      </div>
    );
  }

  const app = apps.find((app) => String(app.id) === id);

  // Safety check
  if (!app) {
    return (
      <div className="text-center text-red-500 text-2xl">App not found</div>
    );
  }

  const handleInstallApp = () => {
    setInstalledApps([...installedApps, app]);
  };

  console.log("installed apps", installedApps);

  return (
    <div className="container mx-auto my-10">
      <div className="shadow space-y-2 text-center p-10">
        <img
          className=" h-[200px] w-[200px] mx-auto "
          src={app.image}
          alt={app.name}
        />
        <h2 className="font-semibold text-3xl ">{app.title}</h2>
        <p>
          Developed By:{" "}
          <span className="font-semibold text-2xl text-purple-500 ">
            {app.companyName}
          </span>
        </p>
        <button
          onClick={handleInstallApp}
          className=" btn bg-purple-500 text-white"
        >
          {" "}
          Install now
        </button>
      </div>
    </div>
  );
};

export default AppDetails;
