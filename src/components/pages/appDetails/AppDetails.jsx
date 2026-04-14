import React from 'react';
import { useParams } from 'react-router';
import useApps from '../../../hooks/useApps';

const AppDetails = () => {
    const {id } = useParams();
    console.log(id);

    const obj = useApps();
    const { apps,loading } = obj;
    console.log(apps, loading ,"details page");

    const app = apps.find((app ) => String(app.id) === id);
    console.log('findapp', app);

    return (
        <div>
            details
            
        </div>
    );
};

export default AppDetails;