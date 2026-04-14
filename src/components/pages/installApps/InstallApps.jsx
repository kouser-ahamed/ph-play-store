import { useContext } from "react";
import { InstallAppsContext } from "../../../context/InstallAppsContext";
import { toast } from "react-toastify";

const InstallApps = () => {
  const { installedApps, setInstalledApps } = useContext(InstallAppsContext);
  console.log("Installed Apps:", installedApps);

  const handleUninstall = (app) => {
    const updatedApps = installedApps.filter((a) => a.id !== app.id);
    setInstalledApps(updatedApps);
    toast.warning(`${app.title} has been uninstalled..!`, {
      position: "top-right",
      autoClose: 1000,
    });
  };

  return (
    <div className=" container mx-auto my-10 space-y-4">
      {installedApps.length === 0 ? (
        <h2 className="font-bold text-center text-4xl font-semibold text-slate-600 my-4 mt-10 rounded-1 shadow-md p-20 rounded-xl">
          No Installed Apps Found!
        </h2>
      ) : (
        installedApps.map((app, ind) => {
          return (
            <div
              key={ind}
              className="flex items-center justify-between gap-4 p-4 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Left side */}
              <div className="flex items-center gap-4">
                <img
                  src={app.image}
                  alt={app.title}
                  className="h-[70px] w-[70px] object-cover rounded-xl shadow-sm"
                />

                <div>
                  <h2 className="font-semibold text-lg text-slate-800">
                    {app.title}
                  </h2>
                  <p className="text-sm text-slate-500">
                    {app.companyName || "Unknown Developer"}
                  </p>
                </div>
              </div>

              {/* Right side */}
              <button
                onClick={() => handleUninstall(app)}
                className="px-4 py-2 rounded-xl bg-red-500 hover:bg-red-600 text-white text-sm font-medium transition"
              >
                Uninstall
              </button>
            </div>
          );
        })
      )}
    </div>
  );
};

export default InstallApps;
