# Rails Notes

1. Generate the rails framework
2. Generate a controller
3. Generate the index 
4. Create a route

To show all the routes a user can take

        rake routes



* Relationships between classes
    * has_many 
    * belongs_to 


Examples: 

**has\_many** with a **belongs\_to** is called a _one-to-many relationship_, because one Category can have many Listings, but a Listing can have at most one Category.


### Stuff to Note

* Instance variables are used to pass data from controller to view. 
* Template filenames that start withs an underscore are known as partials, which are intended to be used from within other views.


 
## Rails & React.js

```ruby 

# Add to gem file
gem 'react-rails'

$ bundle 
$ rails g react:install

# The react:install generator will automatically include the react JavaScript library in your asset pipeline

```

To create a component:

```ruby
#app/views/site/index.html.erb
<%= react_component 'Main' % >


## app/assets/javascripts/components/_main.js.jsx

var Main = React.createClass({ 
    render() { 
        return ( 
        <div> 
            <h1>Hello, World!</h1> 
        </div> 
        ) 
   } 
});

```
