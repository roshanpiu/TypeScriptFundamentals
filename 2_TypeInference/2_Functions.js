function init(num) {
    function myFunc1(x) {
        return x * x;
    }
    //arrow functions
    var myFunc2 = function (x) { return x * x; };
    var helloWorld;
    helloWorld = function (name) {
        console.log("Hello " + (name || 'unknown'));
    };
    //delcares the function to be a function which accepts a string parameter and returns nothing 
    var greetMe;
    greetMe = function (msg) {
        console.log(msg);
    };
    greetMe('Hello!');
    var squareIt;
    var rectA = { h: 7 };
    var rectB = { h: 10, w: 20 };
    squareIt = function (rect) {
        if (rect.w === undefined) {
            return rect.h * rect.h;
        }
        return rect.h * rect.w;
    };
    console.log(squareIt(rectA));
    console.log(squareIt(rectB));
}
