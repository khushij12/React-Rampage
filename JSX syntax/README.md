# Embedding Expressions in JSX
```js
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;
```

# JSX is an Expression Too
This means that you can use JSX inside of if statements and for loops, assign it to variables, accept it as arguments, and return it from functions:
```js
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
```

#  string literals
- may use quotes or braces
```js
const element = <a href="https://www.reactjs.org"> link </a>;

or

const element = <img src={user.avatarUrl}></img>;
```

# JSX Prevents Injection Attacks
- Everything is converted to a string before being rendered. This helps prevent XSS (cross-site-scripting) attacks.