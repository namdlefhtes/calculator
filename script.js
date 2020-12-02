/* function that grabs value for each button clicked and writes it to tom in display div.
likely requires object to store each value to avoid have one function per button. 

check 

https://www.theodinproject.com/courses/foundations/lessons/calculator

*/

//try to store each value in array.



// number array should keep track of each complete number. Only once an 
// once an operator is selected it should push that complete number to it.

let tempArray = [] ;
let num1Array = [];
let num2Array = [];
let addArray = [];
var num = "";
//var paragraph = document.getElementById("numberDisplay");
//var printNumber = document.createTextNode(num);


function getNumber(num) {
    let paragraph = document.getElementById("numberDisplay");
    let printNumber = document.createTextNode(num);
    paragraph.appendChild(printNumber);
    tempArray.push(num);  
    joinedNumber = Number(tempArray.join(""));
    num1Array = [];
    num1Array.push(joinedNumber);
    console.log(num1Array);
};
// this function may need to be changed to operator which has different options for each.
function add() {
    //holds first number from equation.
    tempArray = [];
    //reset number. and display.
    num = "";
    document.getElementById('numberDisplay').innerHTML='';
    //add next part of equation.
    tempArray.push(num);
    num2Array.push(joinedNumber);
    console.log(num2Array +" and " + num1Array);

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

function operator() {
 //if add, etc.

};