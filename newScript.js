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
let result = "";
let currentOperator = "";

let operators = {
    '+': function(operandOne,operandTwo) {return operandOne + operandTwo },
    '-': function(operandOne,operandTwo) {return operandOne - operandTwo },
    '*': function(operandOne,operandTwo) {return operandOne * operandTwo },
    '/': function(operandOne,operandTwo) {return operandOne / operandTwo },
};



function pushToHolder() {
 if ( equationArray.length >= 1) {
    operatorHolderArray.push(selectedOperator);
    }
};


function getNumber(num) {
    if (typeof(num) === "number") {
        //joinedNumber is the main number.
        tempArray.push(num);  
        joinedNumber = Number(tempArray.join(""));
        numArray.push(joinedNumber);
        //initiate equals when equation becomes multi-part and next number is added.
         if ( operatorHolderArray.length < 1 ) {
            document.getElementById('equationDisplay').innerHTML='';
            let equationDisplay = document.getElementById("equationDisplay");
            let printEquation = document.createTextNode(joinedNumber);
            equationDisplay.appendChild(printEquation);
        }

        else if ( operatorHolderArray.length == 1 ) {
                //document.getElementById('equationDisplay').innerHTML=(equationArray[0]+"  "+ currentOperator + " ");
                let equationDisplay = document.getElementById("equationDisplay");
                let printEquation = document.createTextNode(joinedNumber);
                equationDisplay.appendChild(printEquation);
                 if ( joinedNumber >= 10 ) {
                    document.getElementById('equationDisplay').innerHTML="";
                    let equationDisplay = document.getElementById("equationDisplay");
                    printEquation = document.createTextNode(equationArray[0] + " " + operatorHolderArray[0] + " " + joinedNumber);
                    equationDisplay.appendChild(printEquation);
                }
        }

        else if ( operatorHolderArray.length >= 2) { // if there is more than one operator.
            equationDisplay = document.getElementById("equationDisplay");
            printEquation = document.createTextNode(joinedNumber);
            equationDisplay.appendChild(printEquation);
            preEquals();            
           
        }
 
          
    }

    else if (num == ".") {
        tempArray.push(num);
        joinedNumber = Number(tempArray.join(""));
        numArray.push(joinedNumber);
        let equationDisplay = document.getElementById("equationDisplay");
        printEquation = document.createTextNode(".");
        equationDisplay.appendChild(printEquation);

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
            equationArray.push(numArray[numArray.length -1]);
            tempArray = [];
            num = "";        
            selectedOperator = '+';
            pushToHolder(selectedOperator);
            equationDisplay = document.getElementById("equationDisplay");
            printEquation = document.createTextNode(" + ");
            equationDisplay.appendChild(printEquation);
            currentOperator = " + ";
    
    }

    else if (sign == 'subtract') {
        equationArray.push(numArray[numArray.length -1]);
        tempArray = [];
        num = "";        
        selectedOperator = '-';
        pushToHolder(selectedOperator);
        equationDisplay = document.getElementById("equationDisplay");
        printEquation = document.createTextNode(" - ");
        equationDisplay.appendChild(printEquation);
        currentOperator == " - ";

        }

    else if (sign == 'divide') {
        equationArray.push(numArray[numArray.length -1]);
        tempArray = [];
        num = "";          
        selectedOperator = '/';    
        pushToHolder(selectedOperator);
        equationDisplay = document.getElementById("equationDisplay");
        printEquation = document.createTextNode(" ÷ ");
        equationDisplay.appendChild(printEquation); 
        currentOperator = " ÷ ";

        }
        
    else if (sign == 'multiply') {
        equationArray.push(numArray[numArray.length -1]);
        tempArray = [];
        num = "";                   
        selectedOperator = '*';   
        pushToHolder(selectedOperator);
        equationDisplay = document.getElementById("equationDisplay");
        printEquation = document.createTextNode(" x ");
        equationDisplay.appendChild(printEquation);  
        currentOperator = " x ";
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
        document.getElementById('numberDisplay').innerHTML="0";
        document.getElementById('errorDisplay').innerHTML="";
        equationArray.length = 0;
        operandOne = "";
        operandTwo = "";    


    }
  

      
    }
;     

//fires on click or if operatorHolderArray.length >= 2 after next number is entered (getNumber())
//gets result for left hand side of equation no matter the # or operations.

/*
function preEquals() {
    
    // calculates result of first 2 parts of equation and places in equationArray.
    operandOne = equationArray.shift();
    operatorPull = operatorHolderArray[0]; 
    operandTwo = equationArray.shift();
    // calculates result of first two operands in equationArray.
    result = operators[operatorPull](operandOne,operandTwo);
    operandOne = "";
    operandOne = result;  // place result of right-hand side of equation in operandOne.
    equationArray.push(operandOne);
    console.log("numbers in equationArray"+equationArray);
    operandTwo = "";
    
}; */

function preEquals() {
    //take first number from array.
    if (joinedNumber <=9 ) {

        operandOne = equationArray.shift();
        operandTwo = equationArray.pop();
        operatorPull = operatorHolderArray[0];
        result = operators[operatorPull](operandOne,operandTwo);
        //equationArray.push(joinedNumber);
        operandOne = result; 
        console.log(equationArray+"eqArray post clear");
        equationArray = [];
        equationArray.push(operandOne);
        equationArray.push(operandTwo);
        console.log("operands: "+operandOne+operandTwo);        
    }


};

function equals(operatorPull) {
    //pushes most recent number from numArray.
   // equationArray.push(numArray[numArray.length -1]);
    equationArray.push(joinedNumber);
    document.getElementById('numberDisplay').innerHTML='';
    //operand combines first two parts of 
    operatorPull = operatorHolderArray[operatorHolderArray.length -1 ];
    operandOne = equationArray[0];
    operandTwo = equationArray[equationArray.length -1];
    operatorPull = operatorHolderArray[operatorHolderArray.length -1];
    result = operators[operatorPull](operandOne,operandTwo)
    console.log("result: " + result);
    let displayElement = document.getElementById("numberDisplay");
    let printNumber = document.createTextNode(result);
    displayElement.appendChild(printNumber);
    equationDisplay = document.getElementById("equationDisplay")
    printEquation = document.createTextNode(" = ");
    equationDisplay.appendChild(printEquation);  

        if (operandTwo == 0 && selectedOperator == '/') {
        document.getElementById('errorDisplay').innerHTML='';
        let errorElement = document.getElementById("errorDisplay");
        let printError = document.createTextNode("Error: Dividing by zero may result in the Universe imploding. Please refrain.");
        errorElement.appendChild(printError);
        }

         
    };

