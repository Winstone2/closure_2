# closure_2
In JavaScript, a closure is a fundamental concept that occurs when a function "closes over" or encapsulates its surrounding lexical scope, preserving access to variables and data even after the outer function has finished executing. This means that a function can maintain a reference to variables from its containing function, even if that containing function has completed its execution and gone out of scope.
    We have an outerFunction that defines a variable outerVar and an innerFunction within it.

    outerFunction returns innerFunction but doesn't immediately invoke it.

    When we call outerFunction(), it returns innerFunction, and we assign this returned function to closureFunc.

    When we subsequently call closureFunc(), it still has access to the outerVar variable from the outerFunction, even though outerFunction has already completed its execution. This is the essence of a closure.

Here's the thought process behind closures:

    Function Scope: In JavaScript, functions create their own scope, which means that variables defined inside a function are only accessible within that function, and they are not visible outside of it.

    Inner Function: In our example, innerFunction is defined inside outerFunction. This means that innerFunction has access to all the variables and parameters of outerFunction.

    Returning a Function: outerFunction returns innerFunction. This means that we can capture the returned function in a variable (closureFunc in this case) and call it later.

    Preservation of Scope: Even after outerFunction has completed executing and its local variables would typically be destroyed, innerFunction still retains access to outerVar. This is because JavaScript "closes over" the scope of outerFunction, creating a closure that keeps references to any variables it needs.

Closures are incredibly useful in JavaScript for various programming patterns, including encapsulation, data hiding, and creating private variables. They are also frequently used with callbacks and in scenarios where you need to maintain state or store information for future use. Understanding closures is essential for mastering JavaScript programming.
