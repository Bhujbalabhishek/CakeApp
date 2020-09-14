Here I have explained the purecomponents and memo concepts

PureComponent
---------------------------------------------------------------------------------------------
creating component by extending the PureComponent Class
A PureComponent implements the shouldComonentUpdate lifecycle method by performing a shallow comparison on the props and state of the component.

If there is no difference, the component is not re-rendered i.e performance boost
this ensures that all the children components are also pure to avoid unexpected behaviour.

Never mutate the state always ensure that return new object that reflects the new state

Inside ParentComp.js name is stored inside state and along with that ComponentDidMount method is there inside this method called setinterval() method accepts 2 arguments 1st is arrow function
inside that will setState name property and 2nd is interval.

in the jsx of ParentComp.js include the RegComp.js and PureComp.js along with name as a prop.

inside the RegComp.js and PureComp.js include the name prop
the differnce between the RegComp.js and PureComp.js is that RegComp.js is extended as Component where as PureComp.js is extended as PureComponent so whenever the there is change occured of the state property name then only the PureComp will Rerender otherwise it will not change and this is not the case in the RegComp as it will it will Rerender the Parent Component and RegComp.js component in every 2 sec as I ahve set the timer to 2 sec inside setInterval() method.
  
Note:- Pure Component is used only io the case of Class components not with the functional compnents.


Memo
----------------------------------------------------------------------------------------------

As in the case of functional component performance boost is get by the memo.

Inside the MemoComp.js we have name as prop and we have exported the MemoComp.js ionside the React.memo() method so it will ensure that every time the state changes the and then only the MemoComp component rerender otherwise it will not rerender with taht ensures the performance boost.