import React, { Component } from 'react'

export class Props extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            UsersData : [
                {
                    id: 1,
                    name: 'Krunal'
                      
                },
                {
                    id: 2,
                    name: 'Ankit'
                },
                {
                    id: 3,
                    name: 'Rushabh'
                }
              ] ,
            //   StocksData : [
            //     {
            //         id: 1,
            //         name: 'TCS'
                      
            //     },
            //     {
            //         id: 2,
            //         name: 'Infosys'
            //     },
            //     {
            //         id: 3,
            //         name: 'Reliance'
            //     }
            //   ]
        }
    }
    
    render() {
        console.log(this.props);
        
        return (
            <div>
                 {
                 this.props.children(this.state.UsersData,{... this.props})
                 }
            </div>
        )
    }
}

export default Props
