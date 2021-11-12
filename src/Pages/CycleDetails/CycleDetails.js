import React from 'react';
import { useParams } from 'react-router';

const CycleDetails = () => {
    const {id} = useParams()
    return (
        <div>
            This is Cycle Details {id}
        </div>
    );
};

export default CycleDetails;