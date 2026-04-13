import React, { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";
import AppCard from "../../ui/AppCard";

const Apps = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();

      setTimeout(() => {
        setApps(data);
        setLoading(false);
      }, 1000);
    };
    fetchData();
  }, []);
  console.log("Fetching data...", apps, loading);

  return (
    <div className=" container mx-auto my-20">
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <HashLoader color="#ad46ff" />
        </div>
      ) : (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {apps.map((app) => (
            <AppCard app={app} key={app.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Apps;
