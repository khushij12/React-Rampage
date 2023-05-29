Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”)

# Props are Read-Only
```js
function sum(a, b) {
  return a + b;
}
```
Such functions are called “pure”.

In contrast, this function is impure because it changes its own input:
```js
function withdraw(account, amount) {
  account.total -= amount;
}
```
All React components must act like pure functions with respect to their props.

