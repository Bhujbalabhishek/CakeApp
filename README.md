This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

<h3>You can visit the app by clicking the below link</h3>

[cakeapp_Link](https://Bhujbalabhishek.github.io/cakeapp)



## FOR PAGINATION
## inside Components/Post folder in that 3 files are there 
inside Post.js I fecth the users data from "https://jsonplaceholder.typicode.com" and on each page there are only 4 users.
fethcing of users is using axios, also data is passed from one component to other using props

inside PostPaginate.js collected the posts using destructuring and then each post is mapped and given the bootstrap classes such as "alert alert-primary" and "alert-heading".

inside Pagination.js written the for loop by counting how many pages will be shown according to the fetched users and on one page only four users are showed and also Prev and Next buttons asre also added.


## REDUX Concepts 
refer the redux folder inside src folder 
in that 3 folders are there cake, icecream, and user
inide each of that 3 files one is containing action type, one is having action creator, and one contains reducer
inside reducer maintained initial state and in the reducer file there is reducer function which takse an action type according to that state is changed.

to use multiple reducers, used combinereducers inside RootReducer.js
state of application is stored in Store.js in that used creatStore method

inside components folder there are 5 js files indside that it is used mapStateToProps and mapDispatchToProps methods also in that used connect method to connect it to store.

## React Routing concepts
mynav.js file contains routing concepts such as switch, Link, BrowserRouter, Route, NavLink which is from the 'react-router-dom'


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


