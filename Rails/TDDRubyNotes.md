## SOLID Ruby

1. Single Responsibility Principle
    * A class should have one, and only one, reason to change.

2. Open/Closed Principle
    * You should be able to extend a classes behavior, without modifying it.
        - Prefer subclassing or wrapping over reopening classes 

3. Liskov Substitution Principle
    * Derived classes must be substitutable for their base classes.
        - If it walks like a duck, quacks like a duck, treat it like a duck

4. Interface Segregation Principle
    * Make fine grained interfaces that are client specific.

5. Dependency Inversion Principle
    * Depend on abstractions, not on concretions.
    

---
## Magic Tricks of Testing 

Unit Tests Goals
* Thorough
* Stable
* Fast
* Few

3 Types of Messages 
1. Incoming
2. Sent to Self
3. Outgoing

2 Flavors
1. Query 
    - Return something, change nothing
2. Command
    - Return nothing (side effect), change something

```ruby 
class Test < MiniTest::Unit::TestCase

    def test_calculation
        obj = newObj.new(26, 1.5)

        assert_in_delta(29, obj.prop1, 0.01) # within 0.01 of 29 
    end
end
```

Test **incoming query messages** by making assertions about **what they send back**


**Do not test private methods**
- Lots of exceptions ^^

Do not test outgoing query messages

---
## Test Driven Development

Software Process:
* Architecture
* Conventions & Standards
* Version Control
* Agile 
* TDD 


Tests Provide:
* Documentation of Code 
* Catch future erros 
* Save time / costs 


TDD:
* Decide what the code will do 
* Write a test will pass if the code does that thing 
* Run the test, see it fail 
* Write the code 
* Run the test, see it pass 

TDD Provides:
* Design and plan before you code 
* Document your design
* Proof that code implements design
* __Encourages design of testable code__


Testable code is modular, decoupled design, methods of limited scope. 


As tests become more specific, the code must become more generic. 


## Architecture: The Lost Years

Use Case and User Story is almost the same thing. 
User Story becomes a use case. 


* Interactors:
    - has application specific business rules. 
    - Cannot be in a framework. 
    - decoupled from db

* Entity:
    - App independent business rules     
    - decoupled from db 


---
## Get a Whiff of This 

* __code smell__ is a surface indication that usually corresponds to a deeper problem in the system

### Code Smells 

1. Bloaters
* Long Method
* Large Class
* Data Clumps
* Long Parameter List
* Primitive Obsession

2. Abusers
* Switch Statements 
* Refused Bequest - inheritance problem, subclass overrides superclass's inherited method and says i do not implement this method.  
* Alternative Classes w/ Diff Interfaces
* Temporary Field

3. Change Preventers
* Divergent Change
* Shotgun Surgery
* Parallel Inheritance Hierarchies 

4. Dispensibles
* Lazy Class
* Speculative Generality 
* Data Class
* Duplicated Code 

5. Couplers
* Feature Envy
* Innappropriate Intimacy 
* Message Chains 
* Middle Man

## Agile 

|   Event	|   Timebox	|
|---	|---	|
|   Standup	|   15m	|
|   Sprint Planning	|   4h	|
|   Backlog Grooming	|   2h	|
|   Sprint Review	|   30m	|
|   Retrospective	|   60m	|

* Retrospective
    1. Setting the Stage
    2. Gather Data
    3. Generate Insights
    4. Decide What To Do
    5. Closing the Retrospective


* INDEPENDENT
    - Does this story have dependencies? We should be able to release it independent from other stories.
* NEGOTIABLE
    - A story card is a placeholder for a conversation, scope is up for negotiation between the business and the team
* VALUABLE 
    - The story should have demonstrated business value to the organization whether it be reduction of tech debt or features that will get new customers or keep existing customers.
* ESTIMATABLE
    - We must know enough about the story to estimate it, otherwise it needs to be broken down or a 'spike' needs to be done to learn more
* SIZED RIGHT
    - A story must fit within the Sprint timebox otherwise it must be broken down.
* TESTABLE	
    - We must understand what 'done' is and the story's acceptance criteria must be unambiguous
# Ruby

```ruby

integer.to_s # converts to string 
string.reverse 

to_i # converts to integers
to_a # converts to arrays

array.max
array.sort 

string.include? "<string>"# tests if string contains given string 

books = {} # dictionary
books.keys 
books.values

:splendid # Ruby symbol, cheaper than strings, 

5.times { print "Odelay!" } # is equivalent to, but rins the block of code 5 times.
print "Odelay!"*5 

if !(cond) # is equal to 
unless (cond)

# Exceptions 
def raise_and_rescue  
  begin  
    puts 'I am before the raise.'  
    raise 'An error has occured.'  
    puts 'I am after the raise.'  
  rescue  
    puts 'I am rescued.'  
  end  
  puts 'I am after the begin block.'  
end  

## Output 
# I am before the raise.  
# I am rescued.  
# I am after the begin block.


=begin
My 
multiline
comment
here
=end

```



