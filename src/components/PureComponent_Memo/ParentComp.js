import React, { Component } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'
import MemoComp from './MemoComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:""
        }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name:"Abhishek"
            })
        },2000 )
    }
    
    render() {
        return (
            <div>
                 <PureComp name ={this.state.name}/>
                 <RegComp name ={this.state.name}/>
                 <MemoComp name={this.state.name}/>
            </div>
        )
    }
}

export default ParentComp
