import React from 'react';

import Shoe from './../Shoe.json';
import { useParams } from 'react-router-dom';
import './../App.css'; 

function ProductItem() {
    const { id } = useParams();
    const shoe = Shoe[id];

    if (!shoe)
        return <h2>Product Not Found</h2>


    return (
        <div >
            <h1>Welcome to ProductItem</h1>
            <div>
                <div >
                    <h4>{shoe.name}</h4>
                    <img src={shoe.img} height={300} alt="shoe" />
                </div>
            </div>
        </div>
    );
}

export default ProductItem;
