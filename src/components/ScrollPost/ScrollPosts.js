import React, { Component } from 'react'
import axios from 'axios'


export class ScrollPosts extends Component {

    state = {
        loading: false,
        posts: [],

    }


    componentDidMount = () => {
        const getPosts = async() => {
            this.setState({loading:true})

            const results = await axios.get('https://jsonplaceholder.typicode.com/posts')

            this.setState({posts: results.data})

            this.setState({loading:false})

            console.log(results.data);

        }
        getPosts();
    }

    render() {
     const {posts} = this.state;
   
     

        return (
            posts.map(post => 
                (  
                   
                    <div className="alert alert-primary">
                        <p key={post.id} className="alert-heading">{post.id}.  {post.title}</p>
                     </div>
                 
                )
            )
        )
    }
}

export default ScrollPosts
