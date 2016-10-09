module interfaces {
    interface SquareFunction{
        (x: number): number;
    }

    var squareItBasic : SquareFunction = function(num) {return num * num;};

    var rectA = {h:7};
    var rectB = {h:10, w:20};

    //using interface to define custom types
    interface Rectangle {
        h: number;
        w? : number;
    }

    var squareIt : (rect: Rectangle) => number;
    squareIt = function(rect){
        if(rect.w === undefined){
            return rect.h * rect.h;
        }
        return rect.h * rect.w;
    }
    console.log(squareIt(rectA));
    console.log(squareIt(rectB));


    //interface ex2
    interface Person{
        name: string;
        age? : number;
        kids: number;
        calcPets: () => number;
        makeMeYounger: (years: number) => void;
        greet: (msg: string) => string;

    }

    var p: Person = {
        name: 'Roshan',
        age: 24,
        kids: 0,
        calcPets: function() {
            return this.kids * 2;
        },
        makeMeYounger : function(years: number){
            this.age -= years;
        },
        greet : function(msg: string){
            return msg + ' ' + this.name;
        }
    };

    console.log(p.name);
    console.log(p.greet("Hello"));
    console.log("age now: "+p.age);
    p.makeMeYounger(3);
    console.log("age after time travel: "+p.age);
    

    //interface ex2
    interface SessionEval{
        addRating: (rating: number) => void;
        calcRating: () => number;
    }

    function sessionEvaluator() : SessionEval {
        var ratings: number [] = [];
        var addRating = (rating: number = 5) => {
            ratings.push(rating);
        };
        var calcRating = () => {
            var sum : number = 0;
            ratings.forEach(function(score){
                sum += score;
            });
            return sum / ratings.length;
        }

        return {
            addRating: addRating,
            calcRating: calcRating
        }
    }
    
}