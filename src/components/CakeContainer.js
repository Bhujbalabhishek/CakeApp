import React from 'react'
import {connect} from 'react-redux'
import { buyCake } from '../redux/cake/CakeAction'
import { addCake } from '../redux/cake/CakeAction'

function CakeContainer(props) {
   
    return (
        <div>
            <h2>No. of cakes using connect - {props.numberOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
         
            <button onClick={props.addCake}>add Cake</button>
            
        </div>
    )
}


const mapStateToProps = state => {
    return {
        numberOfCakes: state.cake.numberOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return ({
        buyCake : () => dispatch(buyCake()),
        addCake : () => dispatch(addCake())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
