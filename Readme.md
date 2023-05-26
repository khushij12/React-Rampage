# Notes from legacy blog

## To add react in website
### Step 1: Add a DOM Container to the HTML
- Add an empty ```<div>``` tag to mark the spot where you want to display something with React. For example:
```html
<!-- ... existing HTML ... -->

<div id="like_button_container"></div>

<!-- ... existing HTML ... -->
```
You can place a “container” <div> like this anywhere inside the <body> tag. You may have as many independent DOM containers on one page as you need. They are usually empty — React will replace any existing content inside DOM containers.

### Step 2: Add the Script Tags
```html
<!-- ... other HTML ... -->

  <!-- Load React. -->
  <!-- Note: when deploying, replace "development.js" with "production.min.js". -->
  <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>

  <!-- Load our React component. -->
  <script src="Like_Button.js"></script>

</body>
```

The first two tags load React. The third one will load your component code.

### Step 3: Create a React Component

Create a file called like_button.js next to your HTML page.

## Optional: Try React with JSX
In the examples above, we only relied on features that are natively supported by browsers.
However, React also offers an option to use JSX instead:

The quickest way to try JSX in your project is to add this <script> tag to your page:
```<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>```

Now you can use JSX in any <script> tag by adding type="text/babel" attribute to it.

```jsx
return (
  <button onClick={() => this.setState({ liked: true })}>
    Like
  </button>
);
```

However, it makes your website slow and isn’t suitable for production. Rather, you can set up a JSX preprocessor to convert all your <script> tags automatically.

### Add JSX to a Project
Go to your project folder in the terminal, and paste these two commands:

Step 1: Run npm init -y
Step 2: Run npm install babel-cli@6 babel-preset-react-app@3

This will add a production-ready JSX setup to your project.

### Run JSX Preprocessor
Create a folder called src and run this terminal command:

```npx babel --watch src --out-dir . --presets react-app/prod```

The tool we just used is called Babel. It converts JSX into regular JavaScript so that the browser can understand it.

## Useful Notes
### React Components
In React, there are two primary ways to define components: class components and functional components. Let's explore the differences between them:

1. Class Components:
   Class components are JavaScript classes that extend the `React.Component` base class. They use the ES6 class syntax and are the traditional way of defining components in React. Class components have a specific lifecycle and can hold state.

   Here's an example of a class component:

   ```jsx
   import React, { Component } from 'react';

   class MyComponent extends Component {
     render() {
       return <div>Hello, World!</div>;
     }
   }
   ```

   Class components have access to lifecycle methods such as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`, allowing you to control component behavior at different stages of its lifecycle. They also support state management using the `this.state` object.

2. Functional Components:
   Functional components are JavaScript functions that accept props as arguments and return React elements. They are simpler and easier to read compared to class components. Functional components were traditionally used for presentational or stateless components. However, with the introduction of React Hooks in React 16.8, functional components gained the ability to manage state and use lifecycle methods.

   Here's an example of a functional component:

   ```jsx
   import React from 'react';

   function MyComponent(props) {
     return <div>Hello, World!</div>;
   }
   ```

   With the introduction of Hooks, functional components can now use the `useState` hook to manage state and other hooks like `useEffect` to handle side effects. Hooks provide a more flexible and concise way to manage component state and lifecycle compared to class components.

Both class components and functional components have their use cases. However, functional components with Hooks have become the preferred approach in recent versions of React due to their simplicity and improved capabilities.