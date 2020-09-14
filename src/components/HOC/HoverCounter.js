import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'
class HoverCounter extends Component {
    
    render() {
        const {count,incrementCount} = this.props
        return (
            <div>
                <h2 onMouseOver={incrementCount}>  hover {count} times </h2>
            </div>
        )
    }
}

export default UpdatedComponent(HoverCounter)
