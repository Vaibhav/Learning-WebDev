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

```