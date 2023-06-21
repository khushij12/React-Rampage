# React-Rampage
This repository includes all my react learning stuffs

Getting Started with React: Tools and Setup
Understanding React Components: A Deep Dive

## Getting Started with React: Tools and Setup
### What is react?
- React is a popular JavaScript library used for building user interfaces. 
- It was developed by Facebook and is now maintained by a community of developers. 
-  React allows developers to create reusable UI components and build complex UIs through a declarative programming. 
-   It uses a virtual DOM (Document Object Model) to render changes to the UI, which makes it fast and efficient.
    - In web development, the Document Object Model (DOM) is a programming interface that represents the structure of an HTML document as a tree-like model. 
    - The Virtual DOM is a concept used in the React library, which is an abstract representation of the DOM, a lightweight copy of it.

### Why react?

### When to use react?
- React can be use both the cases, to add some interactivity to a simple HTML page, or start a complex React-powered app.

### Tools
- React Developer Tools: This is a browser extension that helps in debugging and inspecting React components.
- Redux DevTools: This is another browser extension that helps in debugging Redux-based applications.
- VSCode: This is a popular code editor that has several extensions for React development, such as ES7 React/Redux/GraphQL/React-Native snippets and Prettier.
- Webpack: This is a module bundler that is often used for React development. It helps in bundling the code and assets, and also has several plugins for optimizing the build.
- Babel: This is a JavaScript compiler that helps in transforming modern JavaScript code into a format that can be run in older browsers.
- ESLint: This is a popular linter that helps in enforcing coding standards and finding potential issues in the code. It has several plugins for React development.

### Playground
- Codepen
- CodeSandbox
- Sandblitz

## Add React to a Website - [Example code](https://github.com/khushij12/React-Rampage/tree/main/To%20Add%20react%20in%20website)

# Questions:

## How does React work/How Virtual DOM works?
React creates a virtual DOM. When a state changes it run diffing alogorithm to find out what has changed in virtual DOM. The second step is called reconciliation, where it updates the DOM with the results of diff.

## What is the use of refs?
Refs is the way to access DOM nodes created in the render method. They should be avoided in most cases. However, they can be useful when you need DOM measurements or to add methods to the components. Refs are commonly assigned to an instance property when a component is constructed. 

<!--Todo - make one repo and showcase some good example-->

## What are props in React?
Props are input to the component. They pass value from one component to another. They are immutable.

## What is Context API in ReactJS?
Context provides a way to pass the data through the component tree without having to pass props down manually at every level. 

<!--Todo - make one repo and showcase some good example-->

## What are React Hooks?
Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don’t work inside classes — they let you use React without classes.

## What are the major features of ReactJS?
- uses virtual DOM instead of real DOM as manipulating real DOM is expensive
- supports server-side rendering
- follows uni-directional data flow or data binding: 
    - data flows in one direction from parent to child
    - child components can't affect parent components
- uses reusable/composable UI components to develop the view

## Explain the use of CSS modules in React.
- CSS modules are used to write modular and reusable CSS in React application.
- CSS modules are locally scoped to avoid naming conflicts: 
    - CSS class names are made unique by postcss-loader by appending a hash to the class name.
    - CSS modules are imported into the component and used as objects.

## How do you style React components?
Three ways:
- CSS Stylesheets
- Inline styles
- JavaScript Object styles
<!--Todo - make one repo and showcase some good example-->

## What is React Router?
React Router is a routing library built on top of React, which is used to create routes in a React application.

## Why do we need to React Router?
- It maintains consistent structure and behavior and is used to develop single-page web applications. 
- Enables multiple views in a single application by defining multiple routes in the React application.

## How is React routing different from conventional routing?
- React routing vs conventional routing
    - single page application / multi page application
    - user navigates without refreshing the page / user navigates with refreshing the page
    - improved performance / poor performance
    - routing is handled client side / routing is handled server side

## How do you implement React routing?
- React Router is a collection of navigational components that compose declaratively with your application.
- React Router has a simple API with powerful features like lazy code loading, dynamic route matching, and location transition handling built right in.

[Simple Route example](https://github.com/khushij12/React-Rampage/tree/main/react-routing)

## What is Redux?
Redux is the JS library used to manage the application state. React is the view layer of the application, and Redux is the model layer. 

## What are the components of Redux?
- Store: It is a JavaScript object which stores the application state.
- Action: It is a plain JavaScript object which describes the change.
- Reducer: It is a function which updates the state based on the action.

## What is flux?
- It is a method of handling complex data inside a client-side application and manages how data flows in a React application.
- There is a single source of data (the store) and triggering certain actions is the only way way to update them.The actions call the dispatcher, and then the store is triggered and updated with their own data accordingly.
- When a dispatch has been triggered, and the store updates, it will emit a change event that the views can rerender accordingly.

## How is Redux different from Flux?
- Redux is an open-source JavaScript library / Flux is an architecture and not a framework or library.
- Store’s state is immutable / Store’s state is mutable
- Can only have a single-store / Can have multiple stores
- Uses the concept of reducer / Uses the concept of the dispatcher

## What are the components in React?
Components are the sub parts of the application. They are reusable and can be nested inside other components.

Two types of components:
1. Stateless functional components
2. Stateful class components

Stateless functional components: 
- They do not have state of their own and only contain render methods.

Stateful class components:
- They can hold and manage their own state and have a separate render method to return JSX on the screen.

## What are the differences between class and functional components?
- Can hold or manage state / Cannot hold or manage state
- Can use lifecycle methods / Cannot use lifecycle methods
- Can use refs / Cannot use refs
- Performance is slower / Performance is faster
- More code / Less code
- Render method is required / Render method is optional

## What are the lifecycle methods of React?
- getInitialState()
- componentWillMount()
- componentDidMount()
- componentWillReceiveProps()
- shouldComponentUpdate()
- componentWillUpdate()
- componentDidUpdate()
- componentWillUnmount()

## What is the use of render() in React?
It is required for each component to have a render() function. This function returns the HTML, which is to be displayed in the component.
If you need to render more than one element, all of the elements must be inside one parent tag like div, form.

## What is a state in React?
State is an object which holds some information that may change over the lifetime of the component. It is mutable.

<!--Todo - show one example-->

## What is the difference between state and props?
- Holds information about the components / Allows to pass data from one component to other components as an argument
- Is mutable / immutable
- Child components cannot access / Child component can access 

## What is a higher-order component in React?
- A higher-order component is a function that takes a component and returns a new component.
```js
const higherOrderComponent = (WrappedComponent) => (props) => {
  return <WrappedComponent {...props} />
}
const EnhancedComponent = higherOrderComponent(WrappedComponent);
```

## What is JSX?
It is an alternative way to return the HTML from the render method of the component. It is a syntax extension to JavaScript. It is a easier way to describe what the UI should look like.

## Can web browsers read JSX directly? 
No, browsers can only read JavaScript objects but JSX is not a regular JavaScript object. Thus, it needs to be compiled into JavaScript objects. For this, we use Babel.

## What is virtual DOM?
The Virtual DOM is a concept used in the React library, which is an abstract representation of the DOM, a lightweight copy of it. When the state of an object changes, the virtual DOM changes only that object in the real DOM, rather than updating all the objects. The Virtual DOM (VDOM) is an in-memory representation of Real DOM. The representation of a UI is kept in memory and synced with the "real" DOM. It's a step that happens between the render function being called and the displaying of elements on the screen. This entire process is called reconciliation.

## What is the difference between ReactJS and AngularJS?
- ReactJS is a library / AngularJS is a framework
- ReactJS is developed by Facebook / AngularJS is developed by Google
- ReactJS is used for developing UI components / AngularJS is used for developing single-page applications
- ReactJS uses virtual DOM / AngularJS uses real DOM
- ReactJS provides uni-directional data flow / AngularJS provides two-way data binding
- ReactJS uses view layer of MVC / AngularJS uses complete MVC architecture
- ReactJS has dedicated tools for debugging / AngularJS has no dedicated tools for debugging
- Client-side rendering / Server-side rendering

## What is the difference between the ES6 and ES5 standards?
- ES6 is the latest standard of JavaScript / ES5 is the older version of JavaScript
- require() is used to import modules / import is used to import modules
- var is used to declare variables / let and const are used to declare variables
- function is used to declare functions / arrow function is used to declare functions
- class is not used / class is used
- export is used to export modules / export default is used to export modules
and many more..

## What is the difference between ReactJS and React Native?
- ReactJS is used for developing web applications / React Native is used for developing mobile applications
- ReactJS uses HTML to develop UI components / React Native uses native components to develop UI components
- ReactJS uses CSS to style UI components / React Native uses StyleSheet to style UI components

## What is an arrow function and how is it used in React?
- It is unnecessary to bind ‘this’ inside the constructor when using an arrow function. This prevents bugs caused by the use of ‘this’ in React callbacks.
```html
<MyInput onChange={this.handleChange.bind(this)} />
```
```html
<MyInput onChange={(e) => this.handleChange(e)} />
```

## What is the use of keys in React?
- Keys are used to identify unique Virtual DOM Elements with their corresponding data driving the UI. They help React to optimize the rendering by recycling all the existing elements in the DOM.

## What is an event in React?
- Events are the triggered reactions to specific actions like mouse hover, mouse click, key press, etc. Handling events with React elements is very similar to handling events on DOM elements. There are some syntactic differences like:
- React events are named using camelCase
- React events are passed as functions rather than strings
<!--Example-->

## What are synthetic events in React?
- Synthetic events are the objects which act as a cross-browser wrapper around the browser’s native event. They combine the behavior of different browsers into one API. This is done to make sure that the events show consistent properties across different browsers. For eg. preventDefault() and stopPropagation().

## What is error boundary?
A class component which implements either one or both of the lifecycle method: getDerivedStateFromError and componentDidCatch then it becomes an error boundary. Also placement of error boundary also matter as it can controls whether the entire app should have the fallback UI or just the component that causing the problem. Refer [this](https://github.com/khushij12/React-Rampage/tree/main/Error%20Boundary) for more info.

## Purpose of getDerivedStateFromError and componentDidCatch?
The static method getDerivedStateFromError is used to render a fallback UI after an error is thrown and the componentDidCatch is used to log the error information.

<!--example-->

## What are Pure Components?
Pure components are the components which render the same output for the same state and props. In function components, you can achieve these pure components through memoized React.memo() API wrapping around the component. This API prevents unnecessary re-renders by comparing the previous props and new props using shallow comparison. So it will be helpful for performance optimizations.

But at the same time, it won't compare the previous state with the current state because function component itself prevents the unnecessary rendering by default when you set the same state again.

The syntactic representation of memoized components looks like below,

const MemoizedComponent = memo(SomeComponent, arePropsEqual?);
Below is the example of how child component(i.e., EmployeeProfile) prevents re-renders for the same props passed by parent component(i.e.,EmployeeRegForm).
```js
  import { memo, useState } from 'react';

  const EmployeeProfile = memo(function EmployeeProfile({ name, email }) {
    return (<>
          <p>Name:{name}</p>
          <p>Email: {email}</p>
          </>);
  });
  export default function EmployeeRegForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    return (
      <>
        <label>
          Name: <input value={name} onChange={e => setName(e.target.value)} />
        </label>
        <label>
          Email: <input value={email} onChange={e => setEmail(e.target.value)} />
        </label>
        <hr/>
        <EmployeeProfile name={name}/>
      </>
    );
  }
  ```
In the above code, the email prop has not been passed to child component. So there won't be any re-renders for email prop change.

In class components, the components extending React.PureComponent instead of React.Component become the pure components. When props or state changes, PureComponent will do a shallow comparison on both props and state by invoking shouldComponentUpdate() lifecycle method.

Note: React.memo() is a higher-order component.

## What is state in React?
State of a component is an object that holds some information that may change over the lifetime of the component. The important point is whenever the state object changes, the component re-renders. It is always recommended to make our state as simple as possible and minimize the number of stateful components.

state

Let's take an example of User component with message state. Here, useState hook has been used to add state to the User component and it returns an array with current state and function to update it.
```js
import React, { useState } from "react";

function User() {
  const [message, setMessage] = useState("Welcome to React world");

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}
```
See Class
```js
import React from 'react';
class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Welcome to React world",
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}
```
State is similar to props, but it is private and fully controlled by the component ,i.e., it is not accessible to any other component till the owner component decides to pass it.

## What are props in React?
Props are inputs to components. They are single values or objects containing a set of values that are passed to components on creation similar to HTML-tag attributes. Here, the data is passed down from a parent component to a child component.

The primary purpose of props in React is to provide following component functionality:

Pass custom data to your component.
Trigger state changes.
Use via this.props.reactProp inside component's render() method.
For example, let us create an element with reactProp property:
```js
<Element reactProp={"1"} />
```
This reactProp (or whatever you came up with) attribute name then becomes a property attached to React's native props object which originally already exists on all components created using React library.
```js
props.reactProp
```
For example, the usage of props in function component looks like below:
```js
import React from "react";
import ReactDOM from "react-dom";

const ChildComponent = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.age}</p>
    </div>
  );
};

const ParentComponent = () => {
  return (
    <div>
      <ChildComponent name="John" age="30" />
      <ChildComponent name="Mary" age="25" />
    </div>
  );
};
```
The properties from props object can be accessed directly using destructing feature from ES6 (ECMAScript 2015). The above child component can be simplified like below.
```js
  const ChildComponent = ({name, age}) => {
      return (
        <div>
          <p>{name}</p>
          <p>{age}</p>
        </div>
      );
    };
    ```
See Class

The Props accessed in Class Based Component as below
```js
      import React from "react";
      import ReactDOM from "react-dom";

      class ChildComponent extends React.Component {
        render() {
          return (
            <div>
              <p>{this.props.name}</p>
              <p>{this.props.age}</p>
            </div>
          );
        }
      }

      class ParentComponent extends React.Component {
        render() {
          return (
            <div>
              <ChildComponent name="John" age="30" />
              <ChildComponent name="Mary" age="25" />
            </div>
          );
        }
      }
```
      
## Why should we not update the state directly?
If you try to update the state directly then it won't re-render the component.

//Wrong
this.state.message = "Hello world";
Instead use setState() method. It schedules an update to a component's state object. When state changes, the component responds by re-rendering.

//Correct
this.setState({ message: "Hello World" });
Note: You can directly assign to the state object either in constructor or using latest javascript's class field declaration syntax.

## What is the purpose of callback function as an argument of setState()?
The callback function is invoked when setState finished and the component gets rendered. Since setState() is asynchronous the callback function is used for any post action.

Note: It is recommended to use lifecycle method rather than this callback function.
```js
setState({ name: "John" }, () =>
  console.log("The name has updated and component re-rendered")
);
```
## What is the difference between HTML and React event handling?
Below are some of the main differences between HTML and React event handling,

    1. In HTML, the event name usually represents in _lowercase_ as a convention:

       ```html
       <button onclick="activateLasers()"></button>
       ```

       Whereas in React it follows _camelCase_ convention:

       ```jsx harmony
       <button onClick={activateLasers}>
       ```

    2. In HTML, you can return `false` to prevent default behavior:

       ```html
       <a
         href="#"
         onclick='console.log("The link was clicked."); return false;'
       />
       ```

       Whereas in React you must call `preventDefault()` explicitly:

       ```javascript
       function handleClick(event) {
         event.preventDefault();
         console.log("The link was clicked.");
       }
       ```

## How to bind methods or event handlers in JSX callbacks?

    There are 3 possible ways to achieve this in class components:

    1. **Binding in Constructor:** In JavaScript classes, the methods are not bound by default. The same rule applies for React event handlers defined as class methods. Normally we bind them in constructor.

       ```javascript
       class User extends Component {
         constructor(props) {
           super(props);
           this.handleClick = this.handleClick.bind(this);
         }
         handleClick() {
           console.log("SingOut triggered");
         }
         render() {
           return <button onClick={this.handleClick}>SingOut</button>;
         }
       }
       ```

    2. **Public class fields syntax:** If you don't like to use bind approach then _public class fields syntax_ can be used to correctly bind callbacks. The Create React App eanables this syntax by default.

       ```jsx harmony
       handleClick = () => {
         console.log("SingOut triggered", this);
       };
       ```

       ```jsx harmony
       <button onClick={this.handleClick}>SingOut</button>
       ```

    3. **Arrow functions in callbacks:** It is possible to use _arrow functions_ directly in the callbacks.

       ```jsx harmony
       handleClick() {
           console.log('SingOut triggered');
       }
       render() {
           return <button onClick={() => this.handleClick()}>SignOut</button>;
       }
       ```

    **Note:** If the callback is passed as prop to child components, those components might do an extra re-rendering. In those cases, it is preferred to go with `.bind()` or _public class fields syntax_ approach considering performance.

## What are inline conditional expressions?
You can use either _if statements_ or _ternary expressions_ which are available from JS to conditionally render expressions. Apart from these approaches, you can also embed any expressions in JSX by wrapping them in curly braces and then followed by JS logical operator `&&`.

    ```jsx harmony
    <h1>Hello!</h1>;
    {
      messages.length > 0 && !isLogin ? (
        <h2>You have {messages.length} unread messages.</h2>
      ) : (
        <h2>You don't have unread messages.</h2>
      );
    }
    ```

## How to create refs?
 There are two approaches

    1. This is a recently added approach. _Refs_ are created using `React.createRef()` method and attached to React elements via the `ref` attribute. In order to use _refs_ throughout the component, just assign the _ref_ to the instance property within constructor.

       ```jsx harmony
       class MyComponent extends React.Component {
         constructor(props) {
           super(props);
           this.myRef = React.createRef();
         }
         render() {
           return <div ref={this.myRef} />;
         }
       }
       ```

    2. You can also use ref callbacks approach regardless of React version. For example, the search bar component's input element is accessed as follows,
       ```jsx harmony
       class SearchBar extends Component {
         constructor(props) {
           super(props);
           this.txtSearch = null;
           this.state = { term: "" };
           this.setInputSearchRef = (e) => {
             this.txtSearch = e;
           };
         }
         onInputChange(event) {
           this.setState({ term: this.txtSearch.value });
         }
         render() {
           return (
             <input
               value={this.state.term}
               onChange={this.onInputChange.bind(this)}
               ref={this.setInputSearchRef}
             />
           );
         }
       }
       ```

## What are forward refs?

    _Ref forwarding_ is a feature that lets some components take a _ref_ they receive, and pass it further down to a child.

    ```jsx harmony
    const ButtonElement = React.forwardRef((props, ref) => (
      <button ref={ref} className="CustomButton">
        {props.children}
      </button>
    ));

    // Create ref to the DOM button:
    const ref = React.createRef();
    <ButtonElement ref={ref}>{"Forward Ref"}</ButtonElement>;
    ```

## Which is preferred option with in callback refs and findDOMNode()
while both callback refs and findDOMNode() can be used for DOM manipulation in ReactJS, it is recommended to use callback refs as the preferred option due to its compatibility with future versions of React and its flexibility in accessing and manipulating DOM elements

## Why are String Refs legacy?

    If you worked with React before, you might be familiar with an older API where the `ref` attribute is a string, like `ref={'textInput'}`, and the DOM node is accessed as `this.refs.textInput`. We advise against it because _string refs have below issues_, and are considered legacy. String refs were **removed in React v16**.

    1. They _force React to keep track of currently executing component_. This is problematic because it makes react module stateful, and thus causes weird errors when react module is duplicated in the bundle.
    2. They are _not composable_ — if a library puts a ref on the passed child, the user can't put another ref on it. Callback refs are perfectly composable.
    3. They _don't work with static analysis_ like Flow. Flow can't guess the magic that framework does to make the string ref appear on `this.refs`, as well as its type (which could be different). Callback refs are friendlier to static analysis.
    4. It doesn't work as most people would expect with the "render callback" pattern (e.g. <DataGrid renderRow={this.renderRow} />)

       ```jsx harmony
       class MyComponent extends Component {
         renderRow = (index) => {
           // This won't work. Ref will get attached to DataTable rather than MyComponent:
           return <input ref={"input-" + index} />;

           // This would work though! Callback refs are awesome.
           return <input ref={(input) => (this["input-" + index] = input)} />;
         };

         render() {
           return (
             <DataTable data={this.props.data} renderRow={this.renderRow} />
           );
         }
       }
       ```
## What is the difference between Shadow DOM and Virtual DOM?
The Shadow DOM is a browser technology designed primarily for scoping variables and CSS in web components. The Virtual DOM is a concept implemented by libraries in JavaScript on top of browser APIs.

Virtual DOM: It creates a copy of the entire DOM in the memory. Shadow DOM: It does not create a complete representation of the entire DOM. It adds subtrees of DOM elements into the document instead of adding them to the main DOM tree.

## What is React Fiber?
Fiber is the new reconciliation engine or reimplementation of core algorithm in React v16. The goal of React Fiber is to increase its suitability for areas like animation, layout, gestures, ability to pause, abort, or reuse work and assign priority to different types of updates; and new concurrency primitives.

## What is the main goal of React Fiber?
The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.

## What is the difference between a controlled component and an uncontrolled component?
A component that controls the input elements within the forms on subsequent user input is called Controlled Component, i.e, every state mutation will have an associated handler function.

The Uncontrolled Components are the ones that store their own state internally, and you query the DOM using a ref to find its current value when you need it. This is a bit more like traditional HTML.

## What is the difference between createElement and cloneElement?
JSX elements will be transpiled to React.createElement() functions to create React elements which are going to be used for the object representation of UI. Whereas cloneElement is used to clone an element and pass it new props.

## What is Lifting State Up in React?
When several components need to share the same changing data then it is recommended to lift the shared state up to their closest common ancestor. That means if two child components share the same data from its parent, then move the state to parent instead of maintaining local state in both of the child components.


## Explain how lists work in React
## How do you create forms in React?
## What is the significance of keys in React?
## What are the core principles of Redux?
## What are the advantages of Redux?
## What are the limitations of Redux?
## What is the difference between Redux and MobX?
## What is the difference between Redux and Context API?
## What is the difference between Redux and React Hooks?
## What is the difference between Redux and React Router?


## What is the difference between React Router and Reach Router?
## What is the difference between React Router and React Router DOM?

## What is the difference between Real DOM and Virtual DOM?
## What is the difference between ReactJS and VueJS?
## What is the difference between ReactJS and jQuery?
## What is the difference between ReactJS and NodeJS?
## What is the difference between ReactJS and JavaScript?
## What is the difference between ReactJS and Redux?

## What is the difference between ReactJS and React Router?
## What is the difference between ReactJS and React Bootstrap?
## What is the difference between ReactJS and React Fiber?
## What is the difference between ReactJS and React Hooks?
## What is the difference between ReactJS and React Context?
## What are the advantages of ReactJS?
## What are the limitations of ReactJS?
## What is the difference between a class component and a functional component?

## What is the difference between a container component and a presentational component?
## What is the difference between a higher-order component and a render prop?
## What is the difference between a pure component and a stateful component?
## What is the difference between a stateful component and a stateless component?
## What is the difference between a stateful component and a dumb component?
## What is the difference between a stateful component and a smart component?
## What is the difference between a stateful component and a functional component?
## What is the difference between a stateful component and a class component?
## What is the difference between a stateful component and a pure component?
## What is the difference between a stateful component and a container component?
## What is the difference between a stateful component and a presentational component?
## What is the difference between a stateful component and a higher-order component?
