
import React, { Fragment } from 'react'
import Car from './car';
import MyContext from './MyContext';

const Cars = props => (
    // it is used whrn we send via prps


    // <Fragment>
    //     <h4>Cars:</h4>
    //     {/* Finally we can use data */}
    //     {Object.keys(props.cars).map(carID => (
    //         <Car
    //             key={carID}
    //             name={props.cars[carID].name}
    //             price={props.cars[carID].price}
    //             incrementPrice={() => props.incrementCarPrice(carID)}
    //             decrementPrice={() => props.decrementCarPrice(carID)}
    //         />
    //     ))}
    // </Fragment>


    // used when we use Context 
    <MyContext.Consumer>
    {context => (
            <Fragment>
                <h4>Cars:</h4>
                {Object.keys(context.cars).map(carID => (
                    <Car
                        key={carID}
                        name={context.cars[carID].name}
                        price={context.cars[carID].price}
                        incrementPrice={() => context.incrementPrice(carID)}
                        decrementPrice={() => context.decrementPrice(carID)}
                    />
                ))}
            </Fragment>
        )}
    </MyContext.Consumer>
);
export default Cars