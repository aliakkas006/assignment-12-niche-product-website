import React from 'react';
import { useParams } from 'react-router';
// import useAuth from '../../hooks/useAuth';

const CycleDetails = () => {
    const { id } = useParams();
    // const { user } = useAuth();

    return (
        <div>
            This is Cycle Details {id}
        </div>
    );
};

export default CycleDetails;