# Recommended Toolchains

If you’re learning React or creating a new single-page app, use Create React App.
If you’re building a server-rendered website with Node.js, try Next.js (it provides routing solutions out of the box).
If you’re building a static content-oriented website, try Gatsby.

## Some other toolchains
[Neutrino](https://neutrinojs.org/) combines the power of webpack with the simplicity of presets, and includes a preset for React apps and React components.
(Nx)[https://nx.dev/react] is a toolkit for full-stack monorepo development, with built-in support for React, Next.js, Express, and more.
(Parcel)[https://parceljs.org/] is a fast, zero configuration web application bundler that works with React.
(Razzle)[https://github.com/jaredpalmer/razzle] is a server-rendering framework that doesn’t require any configuration, but offers more flexibility than Next.js.

# Create React App

```npx create-react-app my-app
cd my-app
npm start```

This command sets up your development environment so that you can use the latest JavaScript features, and optimizes your app for production. It just creates a frontend build pipeline, so you can use it with any backend you want. When you’re ready to deploy to production, running npm run build will create an optimized build of your app in the build folder.

<!--cd Create\ a\ new\ react\ app -->