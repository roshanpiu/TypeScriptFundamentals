var Objects;
(function (Objects) {
    //uses type inference to determine type
    var square = { h: 10, w: 20 };
    //explicit delaration of Objects
    var points = { x: 10, y: 20 };
    //Functions 
    //uses type inference to determine type
    var multiply = function (x) {
        return x * x;
    };
    //explicit delaration of Function
    var multiplyMore;
    multiplyMore = function (x) {
        return x * x;
    };
    var rectangle = {
        h: 10,
        w: 10,
        calArea: function () {
            return this.h * this.w;
        }
    };
    console.log("Area: " + rectangle.calArea());
    //here w is a optional parameter
    var squareIt = function (rect) {
        if (rect.w === undefined) {
            return rect.h * rect.h;
        }
        return rect.h * rect.w;
    };
    console.log(squareIt({ h: 10, w: 10 }));
    console.log(squareIt({ h: 10 }));
})(Objects || (Objects = {}));
