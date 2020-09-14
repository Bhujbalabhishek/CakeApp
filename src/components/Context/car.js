import React, { Fragment } from 'react'

const Car = props => (
    <Fragment>
        <p>Name: {props.name}</p>
        <p>Price: ${props.price}</p>
        <button onClick={props.incrementPrice}> + </button>
        <button onClick={props.decrementPrice}> - </button>
    </Fragment>
);

export default Car