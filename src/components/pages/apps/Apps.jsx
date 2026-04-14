import { HashLoader } from "react-spinners";
import AppCard from "../../ui/AppCard";
import useApps from "../../../hooks/useApps";

const Apps = () => {
  const obj = useApps();
  const { apps, loading } = obj;
  console.log(obj);


  // console.log("Fetching data...", apps, loading);

  return (
    <div className="container mx-auto my-10">
      <div className="mt-8 mb-8 text-center max-w-[50%] mx-auto">
        <h2 className="font-bold text-4xl">All apps</h2>
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
          {apps.map((app, ind) => {
            return <AppCard app={app} key={ind} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Apps;
