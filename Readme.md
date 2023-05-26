# Notes from legacy blog

## To add react in website
Step 1: Add a DOM Container to the HTML
- Add an empty ```<div>``` tag to mark the spot where you want to display something with React. For example:
```html
<!-- ... existing HTML ... -->

<div id="like_button_container"></div>

<!-- ... existing HTML ... -->
```
Step 2: Add the Script Tags
```html
<!-- ... other HTML ... -->

  <!-- Load React. -->
  <!-- Note: when deploying, replace "development.js" with "production.min.js". -->
  <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>

  <!-- Load our React component. -->
  <script src="like_button.js"></script>

</body>
```
Step 3: Create a React Component
