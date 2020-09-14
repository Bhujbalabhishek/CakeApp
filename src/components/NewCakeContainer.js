import React, {useState} from 'react'
import {connect} from 'react-redux'
import { buyCake } from '../redux/cake/CakeAction'
import { addCake } from '../redux/cake/CakeAction'

function NewCakeContainer(props) {
   
    const [number, setNumber] = useState(1)
    const [number1, setNumber1] = useState(1)
    return (
        <div>
            <h2>No. of cakes using connect - {props.numberOfCakes}</h2>
            <input type="text" value={number} onChange={e =>setNumber(e.target.value)} ></input>
            <button onClick={()=>props.buyCake(number)}>Buy {number} Cake</button>
            
            <hr></hr>
            <input type="text" value={number1} onChange={e =>setNumber1(e.target.value)}></input>
            <button onClick={() =>props.addCake(number1)}>add {number1} Cake</button>
            <hr></hr>
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
        buyCake : (number) => dispatch(buyCake(number)),
        addCake : (number1) => dispatch(addCake(number1))
    })
}


       
   

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer)
