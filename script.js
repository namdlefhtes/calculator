/*
https://www.theodinproject.com/courses/foundations/lessons/calculator

*/

//try to store each value in array

//holds values. will need to use for multi part equations. not sure it will work as I want.

var operatorHolderArray = [];
let tempArray = [] ;
let numArray = [];
let equationArray = [];
var num = "";

let operators = {
    '+': function(operandOne,operandTwo) {return operandOne + operandTwo },
    '-': function(operandOne,operandTwo) {return operandOne - operandTwo },
    '*': function(operandOne,operandTwo) {return operandOne * operandTwo },
    '/': function(operandOne,operandTwo) {return operandOne / operandTwo },
};

function tempNumberPush() {
    tempNumber = Number(numArray);
    equationArray.push(numArray[numArray.length -1]);
    //holds first number from equation.
    tempArray = [];
    //reset number. and display.
    num = "";
    //add next part of equation.
    tempArray.push(num);


};

function pushToHolder() {
 if ( equationArray.length >= 1) {
    operatorHolderArray.push(selectedOperator);
    console.log(selectedOperator);
    }
};


function getNumber(num) {
    if (typeof(num) === "number" /*|| num == "." */ ) {
        //joinedNumber is the main number.
        tempArray.push(num);  
        joinedNumber = Number(tempArray.join(""));
        //console.log(joinedNumber);
        numArray.push(joinedNumber);
        document.getElementById('numberDisplay').innerHTML='';
        /*let displayElement = document.getElementById("numberDisplay");
        let printNumber = document.createTextNode(joinedNumber);
        displayElement.appendChild(printNumber); */
        equationDisplay = document.getElementById("equationDisplay")
        printEquation = document.createTextNode(joinedNumber);
        equationDisplay.appendChild(printEquation);
        console.log(joinedNumber);

        //initiate equals when equation becomes multi-part and next number is added.
        if ( operatorHolderArray.length >= 2 ) {
            preEquals();
        
        }
          
    }

    else if (num == ".") {
        tempArray.push(num);
        joinedNumber = Number(tempArray.join(""));
        numArray.push(joinedNumber);
        document.getElementById('numberDisplay').innerHTML='';
        let displayElement = document.getElementById("numberDisplay");
        let printNumber = document.createTextNode(joinedNumber + ".");
        displayElement.appendChild(printNumber);
             if  ( numArray.includes(NaN) == true ) {
                numArray.pop();
                tempArray.pop();
                joinedNumber = Number(tempArray.join(""));
                document.getElementById('errorDisplay').innerHTML='';
                let errorElement = document.getElementById("errorDisplay");
                let printError = document.createTextNode("Error: number can only contain one decimal.");
                errorElement.appendChild(printError);
                document.getElementById("numberDisplay").innerHTML = joinedNumber;
            }  
    
    }

    }

function operator(sign) {

   if (sign == 'add') {
            tempNumberPush(numArray);
            selectedOperator = '+';
            pushToHolder(selectedOperator);
            equationDisplay = document.getElementById("equationDisplay")
            printEquation = document.createTextNode("+");
            equationDisplay.appendChild(printEquation);

        //document.getElementById("equationDisplay").innerHTML = equationArray + " + ";
    }

    else if (sign == 'subtract') {
        tempNumberPush(numArray);
        selectedOperator = '-';
        pushToHolder();
        equationDisplay = document.getElementById("equationDisplay")
        printEquation = document.createTextNode("-");
        equationDisplay.appendChild(printEquation);
        }

    else if (sign == 'divide') {
        tempNumberPush(numArray);        
        selectedOperator = '/';    
        pushToHolder();
        equationDisplay = document.getElementById("equationDisplay")
        printEquation = document.createTextNode("÷");
        equationDisplay.appendChild(printEquation); 
        }
        
    else if (sign == 'multiply') {
        tempNumberPush(numArray);            
        selectedOperator = '*';   
        pushToHolder();
        equationDisplay = document.getElementById("equationDisplay")
        printEquation = document.createTextNode("x");
        equationDisplay.appendChild(printEquation);  
        }

    else if (sign == 'clear') {
        console.log("clear");
        numArray = [];       
        tempArray = [];            
        num = "";   
        tempNumber = "";
        selectedOperator = '';   
        operatorHolderArray = [];
        document.getElementById("equationDisplay").innerHTML = "";
        getNumber(0);
    }
  

      
    }
;     

//fires on click or if operatorHolderArray.length >= 2 after next number is entered (getNumber())

function preEquals() {
    operandOne = equationArray.shift();
    operatorOne = operatorHolderArray.shift();
    operandTwo = equationArray.shift();
    result = operators[operatorOne](operandOne,operandTwo);
    equationDisplay = document.getElementById("equationDisplay")
    printEquation = document.createTextNode("test");
    equationDisplay.appendChild(printEquation);

    operandOne = result; // place result of right-hand side of equation in operandOne.
    operandTwo = joinedNumber;
    result = "";
    result = operators[operatorOne](operandOne,operandTwo);
    displayElement = document.getElementById("numberDisplay");
    printNumber = document.createTextNode(result);
    displayElement.appendChild(printNumber);
};

function equals() {
    //pushes most recent number from numArray.
    equationArray.push(numArray[numArray.length -1]);
    document.getElementById('numberDisplay').innerHTML='';
    //operand combines first two parts of 
    operandOne = equationArray.shift();
    operatorOne = operatorHolderArray.shift();
    operandTwo = equationArray.shift();
    result = operators[operatorOne](operandOne,operandTwo)
    let displayElement = document.getElementById("numberDisplay");
    let printNumber = document.createTextNode(result);
    displayElement.appendChild(printNumber);
         
    };

