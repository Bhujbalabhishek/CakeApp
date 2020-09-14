import React, { Component } from 'react'

export class PostUpload extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             albumId: null,
     
        }
    }
    

    componentDidMount() {
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'POST Request' })
        };
        fetch('https://jsonplaceholder.typicode.com/photos', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ albumId: data.id }));
    }


    render() {
        const {albumId} = this.state
        return (
            <div>
                <h3>postId is {albumId} </h3>
            </div>
        )
    }
}

export default PostUpload
