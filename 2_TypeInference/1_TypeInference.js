//javacript way uses type inference to determine num is type of number
var num = 2;
//defines the type as number
//null can be assigned to any type
//undefined can be assigned to any type
var num1;
var num2 = 2;
var num3 = null;
var num4 = undefined;
//this variable can be of any type
//in TS there is a type called any which can be of any type and the base type of all types
//here both are the same since when TS can't figureout type it will be type any
var any;
var any;
//declaring functions with parameters with types
function addNumbers(num1, num2) {
    return num1 + num2;
}
addNumbers(1, 1);
