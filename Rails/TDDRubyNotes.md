# SOLID Ruby

https://www.youtube.com/watch?v=dKRbsE061u4 

## Notes

Single Responsibility Principle
    * A class should have one, and only one, reason to change.

Open/Closed Principle
    * You should be able to extend a classes behavior, without modifying it.
        - Prefer subclassing or wrapping over reopening classes 

Liskov Substitution Principle
    * Derived classes must be substitutable for their base classes.
        - If it walks like a duck, quacks like a duck, treat it like a duck

Interface Segregation Principle
    * Make fine grained interfaces that are client specific.

Dependency Inversion Principle
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


## Architecture: The Lost Years

