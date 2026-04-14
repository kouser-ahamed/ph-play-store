import React from 'react';
import { useParams } from 'react-router';
import useApps from '../../../hooks/useApps';

const AppDetails = () => {
    
    const params = useParams();
    const { id } = params;
    const {apps, loading} = useApps();
    
    return (
        <div>
            app details page
            <p>App ID: {id}</p>
            
        </div>
    );
};

export default AppDetails;