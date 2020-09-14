import React, { Component } from 'react'
import axios from 'axios';
import PostPaginate from './PostPaginate';
import Pagination from './Pagination';

export class Post extends Component {

    state = {
        posts : [],
        loading : false,
        currentPage : 1,
        postPerPage : 4
    }


    componentDidMount(){
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

        const { currentPage, postPerPage, posts, loading } = this.state

        const indexOfLastPost = currentPage * postPerPage;
        const indexOfFirstPost = indexOfLastPost - postPerPage;
        const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost )

        const paginate = pageNum => this.setState({currentPage : pageNum})
        const nextPage = () => this.setState({currentPage : currentPage + 1})
        const prevPage = () => this.setState({currentPage : currentPage - 1})
        return (
            <div className="container">
                <h2 className="my-5 text-priamry text center" ></h2>
                <PostPaginate posts = {currentPosts} loading = {loading}/>
                <Pagination postsPerPage = {postPerPage} totalPosts={posts.length} paginate ={paginate} nextPage={nextPage} prevPage={prevPage}/>
            </div>
        )
    }
}

export default Post
