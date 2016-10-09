var types;
(function (types) {
    //any 
    var data;
    var info;
    var doSomething = function (arg) {
        return arg;
    };
    //primitives
    var age = 24;
    var score = 99.999;
    var rating = 10;
    var hasData = true;
    var isReady = true;
    var isBald = function () { return 'yes'; };
    var hasHair = !!isBald();
    //string array
    function getArrayLenght(x) {
        var len = x.length;
        return len;
    }
    var names = ['Roshan', 'Piumal'];
    console.log(getArrayLenght(names));
    //null
    var sales = null;
    var animal = null;
    var orderDate = null;
    //undefined
    var quantity;
    var company = undefined;
    console.log(quantity);
    console.log(company);
})(types || (types = {}));
