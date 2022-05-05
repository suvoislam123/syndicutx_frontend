import React from 'react';
import { useParams } from 'react-router-dom';

const ConfirmOrder = () => {
    const { id } = useParams();
    return (
        <div>
            <h1>This product id { id}</h1>
        </div>
    );
};

export default ConfirmOrder;