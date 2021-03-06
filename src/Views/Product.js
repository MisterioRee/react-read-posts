import React, { useState, useEffect } from 'react'; 
import { useParams } from 'react-router-dom';

import Loader from '../Components/Loader';
import { useAxiosGet } from '../Components/HttpRequests';

function Product() {

    const { id } = useParams();
    const url = `https://5f167faba346a00016738e1e.mockapi.io/api/products/${id}`;
    const product = useAxiosGet(url);
    const content = null;

    if (product.error) {
        content = <p> Error...!</p>
    }

    if (product.loading) {
        content = <Loader />
    }

    if (product.data) {
        content =
            <div>
                <h1 className="text-2xl font-bold mb-3">
                    {product.data.name}
                </h1>
                <div>
                    <img src={product.data.images[0].imageUrl}
                        alt={product.data.name} />
                </div>
                <div className="font-bold text-xl mb-3">
                    $  {product.data.price}
                </div>
                <div>
                    {product.data.description}
                </div>
            </div>
    }
    return (
        <div>
            {content}
        </div>
    )
}


export default Product;