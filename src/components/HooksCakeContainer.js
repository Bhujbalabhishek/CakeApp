import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { buyCake } from '../redux/cake/CakeAction'

function HooksCakeContainer() {
    const numberOfCakes = useSelector(state => state.cake.numberOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>number of cakes using useselector and UseDispatch - {numberOfCakes}</h2>
            <button onClick={()=>dispatch(buyCake())}>buy cake</button>
        </div>
    )
}

export default HooksCakeContainer
