# Notes

### Basics

##### JavaScript has 7 types:

- Number
- String
- Boolean
- Undefined
- Null
- Symbol (New in ECMAScript 6)
- Object

##### JavaScript comparisons:

* !== - Will show whether the value/object is "not equal to" to the other value/object.
* === - Will show whether the value/object is "equals to" to the other value/object.
* '>=' - Will show whether the value/object is "Greater or equal than" to the other value/object.
* '<=' - Will show whether the value/object is "Smaller or equal than" to the other value/object.
* '>' - Will show whether the value/object is "Greater than" to the other value/object.
* '<' - Will show whether the value/object is "Smaller than" to the other value/object.

##### JavaScript variables:

* var - When creating this variable, it HAS to start with a letter. It cannot start with a numbers. "$" and "_" works too. However it can have numbers in its name, as long as it starts with a letter. (ALWAYS START LOWERCASE LETTERS. This is called CamelCase.)
* let (New in ECMAScript 6)
* const (New in ECMAScript 6)


##### JavaScript conditionals:

* if
* else
* else if
* ternary operator
* switch

##### JavaScript logical operators:

* &&
* ||
* !


##### JavaScript functions:

* var a = function name() {} - Function expression - We assign the function, so we can reference it.
* function name() {} - Function declaration 
* return
* () => (New in ECMAScript 6)

##### JavaScript data structures:

* Array
* Object


##### JavaScript looping:

* for
* while
* do
* foreach (New in ECMAScript 5)

##### JavaScript keywords:

```javascript
break
case
catch
class
const
continue
debugger
default
delete
do
else
export
extends
finally
for
function
if
import
in
instanceof
new
return
super
switch
this
throw
try
typeof
var
void
while
with
yield
```



------

### Terminology

##### Function declaration

Function declaration is a way for us to create a function.

Example:

```javascript
function newFunction () {
    
}
```

##### Function expression

Function expression is a way for us to create a variable.

Function expressions can have either be an anonymous function or have a name. It is more likely to encounter anonymous functions than the named ones.

Example:

```javascript
var newFunction = function() {
    
}; //Notice the semicolon is used here.
```

##### Expression

An expression is something that denotes a value. It is something that produces a  value. Expressions end with a semicolon.

Example:

```javascript
1+3; //It produces a value
var a = 2; // Also an expression
return true; // Also an expression
```

##### Calling or invoking a function

Calling or invoking is something we use to perform our actions. It basically calls or invokes a function this way.

Example:

```javascript
alert(); //Calls the function alert
newFunction(param1, param2); //Calls a new created function we've made
```

##### Assign a variable

This assigns a variable to something.

Example:

```javascript
var a = true; //Assigns the variable "a" to true
```

##### Function vs Method

```javascript
function thisIsAFunction() {
    //This is a function
}

thisIsAFunction(); //This is how you call a function

var obj = {
    thisIsAMethod: function() {
        //This is a method
    }
}

obj.thisIsAMethod(); // This is how to call a method. Notice you have to call the obj before with a dot, and then write the method within that obj.
```

