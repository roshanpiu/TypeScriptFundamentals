module types {
    //any 
    var data: any;
    var info;
    var doSomething = function(arg){
        return arg;
    }

    //primitives
    var age : number = 24;
    var score : number = 99.999;
    var rating : number = 10;

    var hasData : boolean = true;
    var isReady = true;
    var isBald = function() {return 'yes'};
    var hasHair = !!isBald();

    //string array
    function getArrayLenght(x:string[]){
        var len: number = x.length;
        return len;
    }

    var names: string[] = ['Roshan', 'Piumal'];
    console.log(getArrayLenght(names)); 

    //null
    var sales : any = null;
    var animal = null;
    var orderDate: Date = null;

    //undefined
    var quantity : number;
    var company = undefined;
    console.log(quantity);
    console.log(company);

}