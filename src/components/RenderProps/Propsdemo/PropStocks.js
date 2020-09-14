import React, { Component } from 'react'
import PropsTable from './propsTable';

export class PropStocks extends Component {
    tabRow(){
        if(this.props.stocks instanceof Array){
          return this.props.stocks.map(function(object, i){
              return <PropsTable obj={object} key={i} />;
          })
        }
      }
    render() {
        console.log(this.props.stocks);
        return (
            <div className="container">
            <table className="table table-striped">
              <thead>
                <tr>
                  <td>ID</td>
                  <td>Name</td>
                </tr>
              </thead>
              <tbody>
                {this.tabRow()}
              </tbody>
            </table>
        </div>
        );
    
    }
}

export default PropStocks
