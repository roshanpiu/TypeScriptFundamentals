function init(num:number) {
    function myFunc1(x: number){
        return x * x;
    }

    //arrow functions
    var myFunc2 = (x: number) => x * x;
    var helloWorld : (name?: string) => void;
    helloWorld = function(name) {
        console.log("Hello "+ (name || 'unknown'));
        
    }

    //delcares the function to be a function which accepts a string parameter and returns nothing 
    var greetMe : (msg: string) => void;

    greetMe = function(msg){
        console.log(msg);
    }

    greetMe('Hello!');

    var squareIt : (rect: {h: number; w?: number;}) => number;
    var rectA = {h:7};
    var rectB = {h:10, w:20};

    squareIt = function(rect){
        if(rect.w === undefined){
            return rect.h * rect.h;
        }
        return rect.h * rect.w;
    }
    console.log(squareIt(rectA));
    console.log(squareIt(rectB));
}