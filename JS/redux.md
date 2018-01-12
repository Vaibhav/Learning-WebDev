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

