import React, { use } from "react";
// import { useLoaderData } from "react-router";

// const appsPromise = fetch("/data.json").then((res) => res.json());

const TrendingApps = () => {
//   const apps = use(appsPromise);
//   console.log(apps);

//   const data = useLoaderData();
//   console.log("data from TrendingApps:", data);
  return (
    <div>
      <div className="mt-8 mb-8 text-center">
        <h2 className="font-bold text-4xl">Trending Apps</h2>
        <p className=" text-gray-600">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
          reiciendis eos laborum tempore quis hic quod cupiditate, consequuntur
        </p>
      </div>
    </div>
  );
};

export default TrendingApps;
