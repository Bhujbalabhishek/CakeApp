import React, { Component } from 'react'
import {Link, BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom';
import CakeContainer from './CakeContainer';
import HooksCakeContainer from './HooksCakeContainer';
import IceCreamContainer from './IceCreamContainer';
import NewCakeContainer from './NewCakeContainer';
import UserContainer from './UserContainer';
import Post from './Post/Post';
import ScrollPosts from './ScrollPost/ScrollPosts';
import FileUpload from './FileUpload/FileUpload';
import PostUpload from './FileUpload/PostUpload';

export class MyNav extends Component {
    render() {
        return (
        <Router>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light" >
                    <NavLink className="navbar-brand" to="/" >React Learning</NavLink>
                        <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                        
                   

                            <li className="nav-item" >
                                <Link to="/CakeContainer" className="nav-link">Cake</Link>
                            </li>
                                
                            <li className="nav-item" >
                                <Link to="/HooksCakeContainer" className="nav-link">HooksCake</Link>
                            </li>

                            <li className="nav-item" >
                                <Link to="/IceCreamContainer" className="nav-link">IceCream</Link>
                            </li>

                            <li className="nav-item" > 
                                <Link to="/NewCakeContainer" className="nav-link">NewCake</Link>
                            </li>

                            <li className="nav-item" >
                                <Link to="/UserContainer" className="nav-link">Users</Link>
                            </li>

                            <li className="nav-item" >
                                <Link to="/Post" className="nav-link">Posts</Link>
                            </li>

                            <li className="nav-item" >
                                <Link to="/ScrollPosts" className="nav-link"> ScrollPosts</Link>
                            </li>

                            <li className="nav-item" >
                                <Link to="/FileUpload" className="nav-link"> FileUpload</Link>
                            </li>

                            <li className="nav-item" >
                                <Link to="/PostUpload" className="nav-link"> PostUpload</Link>
                            </li>

                        </ul>
                        </div>
                </nav>

                    


                    <Switch>
                
                        <Route exact path="/CakeContainer">
                            <CakeContainer />
                        </Route>

                        <Route exact path="/HooksCakeContainer">
                            <HooksCakeContainer />
                        </Route>

                        <Route exact path="/IceCreamContainer">
                            <IceCreamContainer />
                        </Route>

                        <Route exact path="/NewCakeContainer">
                            <NewCakeContainer />
                        </Route>

                        <Route exact path="/UserContainer">
                            <UserContainer />
                        </Route>

                        <Route exact path="/Post">
                            <Post />
                        </Route>

                        <Route exact path="/ScrollPosts">
                            <ScrollPosts />
                        </Route>

                        <Route exact path="/FileUpload">
                            <FileUpload />
                        </Route>

                        <Route exact path="/PostUpload">
                            <PostUpload />
                        </Route>

        
                    </Switch>
                </div>

        </Router>
          
        )
    }
}

export default MyNav
