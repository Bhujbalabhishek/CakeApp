Here Context concept is explained

<h3>Context provides a way to pass data through the component tree without having to pass props down manually at every level.</h3>

In this Context folder first I have tried using sending the props to the each component as from Context.js to ProductList.js and then to Cars.js and then to car.js as it is best way to handle the data as this is also known as "prop drilling" as we are sending props from each component from parent to child.

React's context allows you to share information to any component, by storing it in a central place and allowing access to any component that requests it (usually you are only able to pass data from parent to child via props).

In this Context concept,

First to create the context, which can later use to create providers and consumers, i.e.MyContext.js,

then can import this context and use it to create our provider, which we are calling MyProvider.js In it,then initialize a state with some values, which can share via "value" prop our provider component. I have sharing this.state.cars along with a couple of methods that manipulate the state.

To make the provider accessible to other components, we need to wrap our App.js. we can get rid of the state and the methods because they are now defined in MyProvider.js

after that import the context again inside Cars.js and wrap our component with it which injects the context argument in the component.then use "context", the same way we would use props. It holds all the values we’ve shared in MyProducer, we just need to use it!

after that we don't send any data or method inside the ProductList.js using Props as earlier in the prop drilling we are sending but in the context we don't.
