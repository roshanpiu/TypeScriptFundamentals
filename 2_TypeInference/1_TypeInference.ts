//javacript way uses type inference to determine num is type of number
var num = 2;

//defines the type as number
//null can be assigned to any type
//undefined can be assigned to any type
var num1: number;
var num2: number = 2;
var num3: number = null;
var num4: number = undefined;

//this variable can be of any type
//in TS there is a type called any which can be of any type and the base type of all types
//here both are the same since when TS can't figureout type it will be type any
var any;
var any : any;

//declaring functions with parameters with types
function addNumbers (num1 : number, num2 : number){
    return num1 + num2;
}

addNumbers(1, 1);