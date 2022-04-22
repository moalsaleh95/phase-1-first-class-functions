function receivesAFunction(callback) {
    return (callback());
}

function callback() {
    console.log(`Hi there`);
};

function returnsANamedFunction() {
    return function namedFunction() {
        console.log("I'm a named function!")
    }
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log("I'm anonynous!")
    }
}