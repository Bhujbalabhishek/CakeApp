import React from 'react';
import './App.css';
import CakeContainer from './components/CakeContainer';
import {Provider} from 'react-redux'
import store from './redux/Store'
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import UserContainer from './components/UserContainer';
import Post from './components/Post/Post';
import ScrollPosts from './components/ScrollPost/ScrollPosts';
import FileUpload from './components/FileUpload/FileUpload';
import PostUpload from './components/FileUpload/PostUpload';
import MyNav from './components/MyNav';
import ClickCounter from './components/HOC/ClickCounter';
import HoverCounter from './components/HOC/HoverCounter';
import ClickCounterTwo from './components/RenderProps/ClickCounterTwo';
import HoverCounterTwo from './components/RenderProps/HoverCounterTwo';
import User from './components/RenderProps/User';
import Counter from './components/RenderProps/Counter';
import FragmentDemo from './components/Fragments/FragmentDemo';
import Table from './components/Fragments/Table';

import StockList from './components/HOC/Hocdemo/StockList';
import UserList from './components/HOC/Hocdemo/UserList';
import Hoc from './components/HOC/Hocdemo/Hoc';
import Props from './components/RenderProps/Propsdemo/Props';
import PropUsers from './components/RenderProps/Propsdemo/PropUsers';
import PropStocks from './components/RenderProps/Propsdemo/PropStocks';
import Context from './components/Context/Context';
import MyProvider from './components/Context/MyProvider';
import ProductList from './components/Context/ProductList';
import ParentComp from './components/PureComponent_Memo/ParentComp';


function App() {


  const StocksData = [
    {
        id: 1,
        name: 'TCS'
          
    },
    {
        id: 2,
        name: 'Infosys'
    },
    {
        id: 3,
        name: 'Reliance'
    }
  ];
  
  const UsersData = [
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
  ];
  
  const Stocks = Hoc(
    StockList,
    StocksData
  );
  
  const Users = Hoc(
    UserList,
    UsersData
  );

  return (
    <Provider store={store}>
      <div className="App">
        {/* <hr></hr>
        <HooksCakeContainer/>
        <hr></hr>
        <CakeContainer/>
        <hr></hr>
        <IceCreamContainer/>
        <hr></hr>
        <NewCakeContainer/>
        <hr></hr>
        <UserContainer/>
        <Post/>
        <ScrollPosts/> */}

        {/* <FileUpload/> */}
        <MyNav/>

        {/* <ClickCounter name={"abhishek"}/>
        <HoverCounter /> */}

        {/* <ClickCounterTwo/>
        <HoverCounterTwo/> */}

        {/* <User render ={(isLoggedIn)=> isLoggedIn ? 'abhishek' : 'guest'}/>

        <Counter>
            {(count, incrementCount)=>(
              <ClickCounterTwo count={count} incrementCount={incrementCount}/>
            )}
        </Counter>  

        <Counter >
            {(count, incrementCount)=>(
              <HoverCounterTwo count={count} incrementCount={incrementCount}/>
            )}
        </Counter>  */}

        {/* <PostUpload/> */}


        {/* <FragmentDemo/> */}
        {/* <Table/> */}




        {/* hoc */}

  


{/* <Users></Users>
<hr></hr>
<Stocks></Stocks> */}


{/* <Props>
            {
            usersData => (
                <PropUsers data={usersData}/>
                )
            }
            
</Props> */}

{/* <Props>
            {
            stocksData => (
                <PropStocks stocks={stocksData}/>
                )
            }
</Props> */}

{/* <Context/> */}


{/* <MyProvider>
  <ProductList/>
</MyProvider> */}
<ParentComp/>
      </div>
    </Provider>

   
  );
}

export default App;
