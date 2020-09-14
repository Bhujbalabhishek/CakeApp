Here I have explained the Hoc concept

A higher-order component is a function that takes a component and returns a new component. A higher-order component (HOC) is the advanced technique in React.js for reusing a component logic.

The component transforms props into UI, and a higher-order component converts a component into another component.

I have created the Stocklist.js and UserList.js having stocks and users properties id and name
as both the components are having similar kind of data as duplicating the code is there 
so here what we can do is that make one Higher-Order Component and pass both the components as an argument when needed.

as Hoc.js is Higher-Order Component,In this file a Hoc function that takes 2 arguments component and data and returns the modified component as HocComponent.
and in both Stocklist.js and UserList.js called the tabRow() function which maps the data that came as props and then returns the TableRow component i.e the data id,name by sending Object data as props, inside the TableRow component will render the data using props.

In App.js file,
storing the arrays for stocks and users and calling that higher-order component function.
