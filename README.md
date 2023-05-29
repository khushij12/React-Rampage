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
- 

### Working of react
- React separates concerns with loosely coupled units called “components”.

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

## Understanding React Components: A Deep Dive
- React lets you build user interfaces out of individual pieces called components. 

# Questions:

## How does React work?
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
The Virtual DOM is a concept used in the React library, which is an abstract representation of the DOM, a lightweight copy of it. When the state of an object changes, the virtual DOM changes only that object in the real DOM, rather than updating all the objects. 

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

<!--example-->

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
## What is the difference between a controlled component and an uncontrolled component?
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
