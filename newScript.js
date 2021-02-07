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
let addSpace = " ";
let displayValue = " ";
var e = "";
let joinedArray = [];

//let currentOperator = "";

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

function operator(sign) {
   
    equationArray.push(numArray[numArray.length -1]);
    tempArray = [];
    num = "";
    
    if ( sign == "+" || sign == "-") {
        selectedOperator = sign;
        pushToHolder(selectedOperator);
        //equationDisplay = document.getElementById("equationDisplay");
        printEquation = document.createTextNode(" " + sign + " ");
        equationDisplay.appendChild(printEquation);
        //currentOperator = ;
    }

    else if ( sign == "÷" || sign == "x" ){
        switch ( sign ) {
            case "÷":  selectedOperator = "/";
            break;
            case "x":  selectedOperator = "*"; 
            break;
            default: break;
        }
        pushToHolder(selectedOperator);
       // equationDisplay = document.getElementById("equationDisplay");
        printEquation = document.createTextNode(" " + sign + " ");
        equationDisplay.appendChild(printEquation);
    }

    else if ( sign == "clear" ) {

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
};

function getNumber(num, currentOperator) {
    const equationDisplay = document.getElementById("equationDisplay");

    function replaceOperator() {
        for (i = 0; i < operatorHolderArray.length; i++ ) {
            if (operatorHolderArray[i] == '/') {
                currentOperator = '÷';
            }
            else if (operatorHolderArray[i] == '*') {
                 currentOperator = 'x';
            } 
            else if (operatorHolderArray[i] == "+" || operatorHolderArray[i] == "-" ) {
                 currentOperator = operatorHolderArray[i];
            }
        }
    };

    if (typeof(num) === "number") {
        //joinedNumber is the main number.
        tempArray.push(num);  
        joinedNumber = Number(tempArray.join(""));
        numArray.push(joinedNumber);
        document.getElementById('equationDisplay').innerHTML='';
        //let equationDisplay = document.getElementById("equationDisplay");
        printEquation = document.createTextNode(joinedNumber);
        equationDisplay.appendChild(printEquation);


            if (operatorHolderArray.length == 1 ) { // two operand equations. Does not use preEquals()
                replaceOperator();
                printEquation = (equationArray[0] + addSpace + currentOperator + addSpace + joinedNumber);
                document.getElementById('equationDisplay').innerHTML= printEquation;  
                displayValue = printEquation;  

            }    

            else if (operatorHolderArray.length ==2 ) { // 3 operand equation. Fires preEquals();
                //z = 0;
                //o= 1;
                replaceOperator();
                preEquals();
                printEquation = displayValue + addSpace+ currentOperator +addSpace+joinedNumber;
                document.getElementById('equationDisplay').innerHTML= printEquation;
                displayValue = printEquation;   

                if ( joinedNumber >= 10 ) {
                    console.log("I am in here");
                    printEquation = equationArray[0]+addSpace+operatorHolderArray[0]+addSpace+equationArray[1]+addSpace+operatorHolderArray[1]+addSpace+joinedNumber; 
                    document.getElementById('equationDisplay').innerHTML= printEquation;
                    displayValue = printEquation;   
                }      

            }
            
            else if (operatorHolderArray.length >= 3) {
            
                replaceOperator();
                preEquals();
                joinedArray = [];
                    for (i=0; operatorHolderArray.length > i; i++ ) {
                        joinedArray.push(equationArray[i]);
                        joinedArray.push(operatorHolderArray[i]);
                        displayValue = joinedArray.join(" ");
                            if ( displayValue.includes("/") == true) {
                                displayValue = displayValue.replace("/","÷");
                                printEquation = displayValue+ addSpace +joinedNumber;
                                document.getElementById('equationDisplay').innerHTML= printEquation;
                            }
                            
                            else if ( displayValue.includes("*")) {
                                displayValue = displayValue.replace("*","x");
                                printEquation = displayValue+ addSpace +joinedNumber;
                                document.getElementById('equationDisplay').innerHTML= printEquation;

                            }
                            else {
                                printEquation = displayValue+ addSpace +joinedNumber;
                                document.getElementById('equationDisplay').innerHTML= printEquation; 
                            }
                    }    
            }

            
            else if (num == ".") {
                tempArray.push(num);
                joinedNumber = Number(tempArray.join(""));
                numArray.push(joinedNumber);
               // let equationDisplay = document.getElementById("equationDisplay");
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
    };
   
    //fires if > 2 operands. 
function preEquals() {

    /* need to have equationArray 1st 2 values operate on each other */
        operatorPull = operatorHolderArray[0];
        operandOne = equationArray[0];
        operandTwo = equationArray[1];
        result = operators[operatorPull](operandOne,operandTwo);
        operandOne = result;
        if (operatorHolderArray.length >= 3) {
            operandTwo = equationArray[equationArray.length -1];
            operatorPull = operatorHolderArray[operatorHolderArray.length -2];
            result = operators[operatorPull](operandOne,operandTwo);
            operandOne = result;  
        }
    }; 

function equals(operatorPull) {
    equationString = document.getElementById('equationDisplay').textContent;
    //for 2 part equations.
    if ((typeof operandOne== 'undefined') ||operandOne == "") {
        equationArray.push(joinedNumber);
        document.getElementById('numberDisplay').innerHTML='';
        operatorPull = operatorHolderArray[operatorHolderArray.length -1];
        operandOne = equationArray[0];            
        operandTwo = joinedNumber;
        //operatorPull = operatorHolderArray[0];
        result = operators[operatorPull](operandOne,operandTwo)
        displayElement = document.getElementById("numberDisplay");
        let printNumber = document.createTextNode(result);
        displayElement.appendChild(printNumber);
        //equationDisplay = document.getElementById("equationDisplay")
        printEquation = document.createTextNode(" = ");
        equationDisplay.appendChild(printEquation);  
            // divide by zero error.
        if (operandTwo === 0 && selectedOperator == '/' ||  result === Infinity) {
            document.getElementById('errorDisplay').innerHTML='';
            document.getElementById('numberDisplay').innerHTML='';
            let errorElement = document.getElementById("errorDisplay");
            let printError = document.createTextNode("Error: Dividing by zero may result in the Universe imploding. Please refrain.");
            errorElement.appendChild(printError);
        };
    }       
    
    else if ( equationString.includes('=')  ) {
    //seems to stop extra equals signs.
    }    
    
    else if ( operandOne > 0 )  { //operandOne should come from the results of last preEquals.
        equationArray.push(joinedNumber); 
        document.getElementById('numberDisplay').innerHTML='';
        operatorPull = operatorHolderArray[operatorHolderArray.length -1];
        operandTwo = joinedNumber;
        //operatorPull = operatorHolderArray[operatorHolderArray.length -1];
        result = operators[operatorPull](operandOne,operandTwo)
        let displayElement = document.getElementById("numberDisplay");
        let printNumber = document.createTextNode(result);
        displayElement.appendChild(printNumber);
        //equationDisplay = document.getElementById("equationDisplay")
        printEquation = document.createTextNode(" = ");
        equationDisplay.appendChild(printEquation);  
        // divide by zero error.
        if (operandTwo === 0 && selectedOperator == '/' ||  result === Infinity) {
            document.getElementById('errorDisplay').innerHTML='';
            document.getElementById('numberDisplay').innerHTML='';
            let errorElement = document.getElementById("errorDisplay");
            let printError = document.createTextNode("Error: Dividing by zero may result in the Universe imploding. Please refrain.");
            errorElement.appendChild(printError);
        }; 
    } 
    
};


document.addEventListener("keydown", function(event) {
    let pressedKey = event.key;

    if ( pressedKey >= 0 || pressedKey <= 9  ) {
        num = Number(pressedKey);
        getNumber(num);
    }

    else if ( pressedKey == '.' ) {
       num = '.';
       getNumber(num);
    }

    else if ( pressedKey == "+" || pressedKey == "-" || pressedKey == "/" || pressedKey == "x" || pressedKey == "X" || pressedKey == "Escape" ) {

        switch(pressedKey) {
        case '+': 
            sign = '+';
            operator(sign);
            break;

        case '-':
            sign = '-';
            operator(sign);
            break;

        case '/':
            sign = '÷';
            operator(sign);
            break;

        case 'x':  
            sign = 'x';
            operator(sign);
            break;

        case 'X':    
            sign = 'x';
            operator(sign);
            break;
        
        case 'Escape':
            sign = 'clear';
            operator(sign);
            break;    
        }
}       
    else if ( pressedKey == '=' || pressedKey == 'Enter' ) {
        equals();
    } 
    else if ( pressedKey == " " || pressedKey == "Space" || pressedKey == "32" ) {
}

});
     


 // bracket here wraps line 29.
