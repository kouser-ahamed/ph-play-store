import AppCard from "../ui/AppCard";
import { HashLoader } from "react-spinners";
import { Link } from "react-router";
import UseApps from "../../hooks/UseApps";

// import { useLoaderData } from "react-router";

// const appsPromise = fetch("/data.json").then((res) => res.json());

const TrendingApps = () => {
  //   const apps = use(appsPromise);
  //   console.log(apps);

  //   const data = useLoaderData();
  //   console.log("data from TrendingApps:", data);

 const obj = UseApps();
  const { apps, loading } = obj;

  return (
    <div className="container mx-auto my-[60px]">
      <div className="mt-8 mb-8 text-center">
        <h2 className="font-bold text-4xl">Trending Apps</h2>
        <p className=" text-gray-600">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
          reiciendis eos laborum tempore quis hic quod cupiditate, consequuntur
        </p>
      </div>

      {loading ? (
        <div className="flex justify-center items-center">
          <HashLoader color="#ad46ff" />
        </div>
      ) : (
        <div className=" grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5">
          {apps.slice(0, 6).map((app, ind) => {
            return <AppCard app={app} key={ind} />;
          })}
        </div>
      )}
      <Link to={"/apps"} className="flex justify-center mt-8">
        <button className="btn text-white bg-purple-500" >View All</button>
      </Link>
    </div>
  );
};

export default TrendingApps;
