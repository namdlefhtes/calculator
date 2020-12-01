/* function that grabs value for each button clicked and writes it to tom in display div.
likely requires object to store each value to avoid have one function per button. 

check 

https://www.theodinproject.com/courses/foundations/lessons/calculator

*/

//try to store each value in array.



// number array should keep track of each complete number. Only once an 
// once an operator is selected it should push that complete number to it.

let numberArray = [] ;
let num1Array = [];
let num2Array = [];
let addArray = [];
var num = "";

function getNumber(num) {
    let paragraph = document.getElementById("numberDisplay");
    let printNumber = document.createTextNode(num);
    paragraph.appendChild(printNumber);
    num1Array.push(num);  
    console.log(num1Array);
    let joinedNumber = Number(num1Array.join(""));
    console.log(joinedNumber);
    num = joinedNumber;
};

function add() {
    //holds first number from equation.
    addArray.push(num);
    console.log(addArray);
    //reset number.
    num = "";
    //add next part of equation.



    add = addArray[0] + addArray[1];
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
