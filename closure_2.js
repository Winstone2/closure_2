function outerFunction() {
    let outerVar = 10;

    function innerFunction() {
        console.log(outerVar); // innerFunction can access outerVar
    }

    return innerFunction;
}

const closureFunc = outerFunction(); // outerFunction returns innerFunction
closureFunc(); // This will log 10, even though outerFunction has finished executing
