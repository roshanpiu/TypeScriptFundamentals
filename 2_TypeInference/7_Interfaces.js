var interfaces;
(function (interfaces) {
    var squareItBasic = function (num) { return num * num; };
    var rectA = { h: 7 };
    var rectB = { h: 10, w: 20 };
    var squareIt;
    squareIt = function (rect) {
        if (rect.w === undefined) {
            return rect.h * rect.h;
        }
        return rect.h * rect.w;
    };
    console.log(squareIt(rectA));
    console.log(squareIt(rectB));
    var p = {
        name: 'Roshan',
        age: 24,
        kids: 0,
        calcPets: function () {
            return this.kids * 2;
        },
        makeMeYounger: function (years) {
            this.age -= years;
        },
        greet: function (msg) {
            return msg + ' ' + this.name;
        }
    };
    console.log(p.name);
    console.log(p.greet("Hello"));
    console.log("age now: " + p.age);
    p.makeMeYounger(3);
    console.log("age after time travel: " + p.age);
    function sessionEvaluator() {
        var ratings = [];
        var addRating = function (rating) {
            if (rating === void 0) { rating = 5; }
            ratings.push(rating);
        };
        var calcRating = function () {
            var sum = 0;
            ratings.forEach(function (score) {
                sum += score;
            });
            return sum / ratings.length;
        };
        return {
            addRating: addRating,
            calcRating: calcRating
        };
    }
})(interfaces || (interfaces = {}));
