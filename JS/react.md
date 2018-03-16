## React 

* View in MVC
* Building large apps with data that changes over
* Component Based Architecture


* Virtual DOM 
    - in-mem representation of real DOM 
    - allows React to be fast 
    - diffing allows React to minimize changes to the DOM -> increasing performance 
    - Total DOM is not modified, only one part of it 



```javascript

// ES5
function(args) {
    ...
    ...
}

// ES6 
(args) => {
    ...
    ...
    return ___;
}

```


### React Component Example

```javascript
class CommentBox extends React.Component {
    
    constructor() {
        super(); //must be called in constructor
    }
    // Every comonent needs a render function 
    // returns a markup 
    render() {
        return (<div>Comment Box </div>);
    }

    // CommentBox component, must match class casing/name 
    // target container where omponent will be rendered to 
    ReactDOM.render( 
        <CommentBox />, document.getElementById('story-app')
    );


}
```

```html

<html>
    <body>
        <div id="story-app"></div>
        <script src="vendors/react.js"> </script>
        <script src="vendors/react-dom.js"> </script>
        <script src="vendors/babel.js"> </script> 
    </body>
</html>

```


* HTML elemts writtin in lowercase
* React components are written in upper camel case 
* Use **this.props.<propName>** for reading property given in JSX

* in React we use **refs** to reference DOM elements in our code after the component has been rendered.

React Component LifeCycle

```js
constructor()
componentWillMount()  //<-- AJAX Requests 
render()
componentDidMount() // <-- Continual AJAX Requests 
componentWillUnmount() // <-- Act as a destrcutor 
```

```js
// Another way to create a component 

export default function component(props) {

    return (<div> Hi </div>); 

}

```

* Arrow functions in classes bind the method to the instance. ie. __.bind(this)__


For deploying a React App
* CodeSandbox.io
* Netlify


## React Router

```js

import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Topic}/>
    <Route exact path={match.path} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
    </div>
  </Router>
)
export default BasicExample

```
