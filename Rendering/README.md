# Updating the Rendered Element
- React elements are immutable. Once you create an element, you can’t change its children or attributes. 
- With our knowledge so far, the only way to update the UI is to create a new element, and pass it to root.render(). (eg. tickling clock example)

# React Only Updates What’s Necessary
![](https://legacy.reactjs.org/c158617ed7cc0eac8f58330e49e48224/granular-dom-updates.gif)