/* function that grabs value for each button clicked and writes it to tom in display div.
likely requires object to store each value to avoid have one function per button. 

check 

https://www.theodinproject.com/courses/foundations/lessons/calculator

*/

//try to store each value in array.

/*
let numberObject  = {
     num1: "value",
     num2: "value",
     num3: "value",
     num4: "value",
};*/


// number array should keep track of each complete number. Only once an 
// once an operator is selected it should push that complete number to it.

let numberArray = [] ;
let num1Array = [];
let num2Array = [];

function getNumber(num) {
    num1Array.push(num);  
    let num1 = num1Array[0,1,2,3,4,5,6,7,8,9];
    let joinedNumber = Number(num1Array.join(""));
    console.log(joinedNumber);
    /*num2 = numberArray[1];
    num3 = numberArray[2];
    num4 = numberArray[3];
    num5 = numberArray[4]; */
    let paragraph = document.getElementById("numberDisplay");
    let printNumber = document.createTextNode(num);
    paragraph.appendChild(printNumber);
};

function add() {
    let operator = "add";
    let result = num[0] + num [1];
    console.log(result); 
    console.log(operator);
};

function subtract() {
    let result = num[0] - num [1];
    console.log(result); 
};

function multiply() {
    let result = num[0] * num [1];
    console.log(result); 
};

function divide() {
    let result = num[0] / num [1];
    console.log(result); 
};
