import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux/iceCream/IceCreamAction'


function CakeContainer(props) {
    
    return (
        <div>
            <h2>No. of icecream using connect - {props.numberOfIceCreams}</h2>
            <button onClick={props.buyIceCream}>Buy IceCream</button>
         
        </div>
    )
}


const mapStateToProps = state => {
    return {
        numberOfIceCreams: state.iceCream.numberOfIceCreams
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream : () => dispatch(buyIceCream())
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
