import React, { use, useEffect, useState } from "react";
import AppCard from "../ui/AppCard";
// import { useLoaderData } from "react-router";

// const appsPromise = fetch("/data.json").then((res) => res.json());

const TrendingApps = () => {
  //   const apps = use(appsPromise);
  //   console.log(apps);

  //   const data = useLoaderData();
  //   console.log("data from TrendingApps:", data);

  const [apps, setApps] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      setApps(data);
    };
    fetchData();
  }, []);

  console.log("Fetching data...", apps);

  return (
    <div className="container mx-auto my-[60px]">
      <div className="mt-8 mb-8 text-center">
        <h2 className="font-bold text-4xl">Trending Apps</h2>
        <p className=" text-gray-600">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
          reiciendis eos laborum tempore quis hic quod cupiditate, consequuntur
        </p>
      </div>

      <div className=" grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5">
        {apps.map((app, ind) => {
          return <AppCard app={app} key={ind} />;
        })}
      </div>
    </div>
  );
};

export default TrendingApps;
