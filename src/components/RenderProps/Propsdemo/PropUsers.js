import React, { Component } from 'react'
import PropsTable from './propsTable';

class PropUsers extends Component {

    tabRow(){
        if(this.props.data instanceof Array){
          return this.props.data.map(function(object, i){
              return <PropsTable obj={object} key={i} />;
          })
        }
      }
    render() {
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

export default PropUsers
