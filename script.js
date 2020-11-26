/* function that grabs value for each button clicked and writes it to tom in display div.
likely requires object to store each value to avoid have one function per button. 

check 

https://www.theodinproject.com/courses/foundations/lessons/calculator

*/

//try to store each value in array.

//let num = [0,1,2,3,4,5,6,7,8,9];


function getNumber(num) {
    console.log(num);
    let enteredNum = ["temp1","temp2"];
    enteredNum[0]=num;
    enteredNum[1]=num;
    console.log(enteredNum)
   
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
