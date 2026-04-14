
import { useContext } from 'react';
import { InstallAppsContext } from '../../../context/InstallAppsContext';


const InstallApps = () => {

    const { installedApps, setInstalledApps } = useContext(InstallAppsContext);
    console.log("Installed Apps:", installedApps);


   
    return (
        <div className=' container mx-auto my-10 space-y-4'>
           {
            installedApps.map((app,ind) => {
                return <div key={ind} className='flex gap-4 items-center shadow p-4 rounded-3xl bg-slate-100'>
                    <img src={app.image} alt={app.title} className='h-[120px] w-auto p-4' />
                    <h2 className='font-semibold text-2xl'>{app.title}</h2>
                    </div>
            })
           }
        </div>
    );
};

export default InstallApps;