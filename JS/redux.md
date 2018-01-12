## Redux

* Every change to the app including the data and UI, is contained in a single object, the **state tree** 
* The State Tree is immutable


Pure functions
    - No side affects such as network/database calls
    - return value depends solely on the value of arguments
    - Confident about return value -> when you call pure functions with same args, you'll get same return value
    - do not modify the values passsed to the functions

Impure Functions 
    - Has side effects 
    - Calss to database, network
    - overwrite the DOM
    - modifies the values passed to them 


Redux takes the previous state, dispatching action and return the next state. It is important that it does not modify the previous state. Function to calculate the next state must be pure. This function is called the **reducer**.

* 

```jsx

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

expect(
  counter(0, { type: 'INCREMENT' })
).toEqual(1);

expect(
  counter(1, { type: 'INCREMENT' })
).toEqual(2);

expect(
  counter(2, { type: 'DECREMENT' })
).toEqual(1);

expect(
  counter(1, { type: 'DECREMENT' })
).toEqual(0);

expect(
  counter(1, { type: 'SOMETHING_ELSE' }) 
).toEqual(1);

expect(
  counter(undefined, {})
).toEqual(0);

console.log('Tests passed!') || displayInPreview('Tests passed!');


// display in plunker preview
function displayInPreview(string) {
  var newDiv = document.createElement("div"); 
  var newContent = document.createTextNode(string); 
  newDiv.appendChild(newContent);
  document.body.appendChild(newDiv)
}

```