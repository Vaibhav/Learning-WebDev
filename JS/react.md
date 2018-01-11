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

