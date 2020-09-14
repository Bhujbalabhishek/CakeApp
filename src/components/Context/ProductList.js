
import React from 'react'
import Cars from './Cars';

const ProductList = props => (
    <div>
        <h2>Product list:</h2>
        {/* Pass props twice */}
        {/* <Cars
            cars={props.cars}
            incrementCarPrice={props.incrementCarPrice}
            decrementCarPrice={props.decrementCarPrice}
        /> */}
            {/* For the context we need not need to pass any props or methods */}
        <Cars/>
    </div>
);

export default ProductList;