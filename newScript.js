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

let operators = {
    '+': function(operandOne,operandTwo) {return operandOne + operandTwo },
    '-': function(operandOne,operandTwo) {return operandOne - operandTwo },
    '*': function(operandOne,operandTwo) {return operandOne * operandTwo },
    '/': function(operandOne,operandTwo) {return operandOne / operandTwo },
};

// fires after operation clicked.
function tempNumberPush() {
    //tempNumber = Number(numArray);
    console.log("does this fire");
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
            document.getElementById('equationDisplay').innerHTML=(equationArray[0]+"  "+ currentOperator + " ");
            let equationDisplay = document.getElementById("equationDisplay");
            
            let printEquation = document.createTextNode(joinedNumber);
            equationDisplay.appendChild(printEquation);
        }
/*
        else if ( operatorHolderArray.length >= 2) {
            console.log(joinedNumber);
            equationDisplay = document.getElementById("equationDisplay");
            printEquation = document.createTextNode(joinedNumber);
            equationDisplay.appendChild(printEquation);
            preEquals();            
           
        } */
          
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
            tempNumberPush(numArray);
            selectedOperator = '+';
            pushToHolder(selectedOperator);
            equationDisplay = document.getElementById("equationDisplay");
            printEquation = document.createTextNode(" + ");
            equationDisplay.appendChild(printEquation);
            currentOperator = " + ";
            
            if ( operatorHolderArray.length >= 2) {
                console.log(joinedNumber);
                equationDisplay = document.getElementById("equationDisplay");
                printEquation = document.createTextNode(joinedNumber);
                equationDisplay.appendChild(printEquation);
                preEquals();            
               
            }
    }

    else if (sign == 'subtract') {
        tempNumberPush(numArray);
        selectedOperator = '-';
        pushToHolder();
        equationDisplay = document.getElementById("equationDisplay");
        printEquation = document.createTextNode(" - ");
        equationDisplay.appendChild(printEquation);
        currentOperator == " - ";

        }

    else if (sign == 'divide') {
        tempNumberPush(numArray);        
        selectedOperator = '/';    
        pushToHolder();
        equationDisplay = document.getElementById("equationDisplay");
        printEquation = document.createTextNode(" ÷ ");
        equationDisplay.appendChild(printEquation); 
        currentOperator = " ÷ ";

        }
        
    else if (sign == 'multiply') {
        tempNumberPush(numArray);            
        selectedOperator = '*';   
        pushToHolder();
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
        document.getElementById('errorDisplay').innerHTML='';
        equationArray.pop();

    }
  

      
    }
;     

//fires on click or if operatorHolderArray.length >= 2 after next number is entered (getNumber())

function preEquals() {
    operandOne = equationArray.shift(); /*equationArray[0];*/
    operatorOne = operatorHolderArray[0]; 
    operandTwo = equationArray.shift(); /*equationArray[1]; */
    numArray.pop(); 
    // calculates result of first two operands in equationArray.
    result = operators[operatorOne](operandOne,operandTwo);
    operandOne = result; // place result of right-hand side of equation in operandOne.
    operandTwo = "";
    //equationArray.push(operandOne);
    //equationArray.push(joinedNumber);
    
};

function equals() {
    //pushes most recent number from numArray.
    equationArray.push(numArray[numArray.length -1]);
    document.getElementById('numberDisplay').innerHTML='';
    //operand combines first two parts of 
    operandOne = equationArray[equationArray.length -2];
    operatorOne = operatorHolderArray[0];
    operandTwo = equationArray[equationArray.length -1];
    result = operators[operatorOne](operandOne,operandTwo)
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

