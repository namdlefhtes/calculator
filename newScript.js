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

//let currentOperator = "";

let operators = {
    '+': function(operandOne,operandTwo) {return operandOne + operandTwo },
    '-': function(operandOne,operandTwo) {return operandOne - operandTwo },
    '*': function(operandOne,operandTwo) {return operandOne * operandTwo },
    '/': function(operandOne,operandTwo) {return operandOne / operandTwo },
};
/*
function generatePrintEquation(equationLength) {
    console.log("equationlength: "equationLength);
    return equationLength;

        for (i=0; i < equationLength; i++  ) {

    printEquation = (equationArray[equationLength] + addSpace + operatorHolderArray[equationLength] + addSpace + equationArray[1] + joinedNumber);
    console.log(printEquation);
    document.getElementById('equationDisplay').innerHTML= printEquation;     

//} */

document.addEventListener("keydown", function(event)   {
    let pressedKey = event.key;
    if ( pressedKey >= 0 || pressedKey <= 9  ) {
        num = Number(pressedKey);
        getNumber(num);
     }

     else if ( pressedKey == '.' ) {
       num = '.';
       getNumber(num);
    }

    else if ( pressedKey == "+" || pressedKey == "-" || pressedKey == "/" || pressedKey == "x" || pressedKey == "Escape" ) {

          switch(pressedKey) {
            case '+': 
                sign = 'add';
                operator(sign);
                break;

            case '-':
                sign = 'subtract';
                operator(sign);
                break;

            case '/':
                sign = 'divide';
                operator(sign);
                break;

            case 'x':  
                sign = 'multiply';
                operator(sign);
                break;
                
            case 'Escape':
                sign = 'clear';
                operator(sign);
                break;    
          }
      }  
        
      else if ( pressedKey == '=' || pressedKey == 'Enter' ) {
            equals('=');
        }
      
      else if ( pressedKey == " " || pressedKey == "Space" || pressedKey == "32" ) {


      }

      else {


      }
        
    });

function pushToHolder() {
 if ( equationArray.length >= 1) {
    operatorHolderArray.push(selectedOperator);
    }
};

function getNumber(num, currentOperator) {
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
        }

    if (typeof(num) === "number") {
        //joinedNumber is the main number.
        tempArray.push(num);  
        joinedNumber = Number(tempArray.join(""));
        numArray.push(joinedNumber);
        document.getElementById('equationDisplay').innerHTML='';
        let equationDisplay = document.getElementById("equationDisplay");
        printEquation = document.createTextNode(joinedNumber);
        equationDisplay.appendChild(printEquation);
            if (operatorHolderArray.length == 1 ) { // two operand equations.
                replaceOperator();
                printEquation = (equationArray[0] + addSpace + operatorHolderArray[0] + addSpace + joinedNumber);
                document.getElementById('equationDisplay').innerHTML= printEquation;   
                displayValue = printEquation;  
                console.log("this is displayValue: "+ displayValue); 
            }

            else if (operatorHolderArray.length ==2 ) {
                replaceOperator();
                preEquals();
                printEquation = displayValue + addSpace+ currentOperator +addSpace+joinedNumber;
                document.getElementById('equationDisplay').innerHTML= printEquation;
                displayValue = printEquation;   
            }

            else if (operatorHolderArray.length ==3) {
                replaceOperator();
                preEquals();
                printEquation = displayValue + addSpace+ currentOperator +addSpace+joinedNumber;
                document.getElementById('equationDisplay').innerHTML= printEquation;
                displayValue = printEquation;   

            }
/*
            else if ( operatorHolderArray.length >= 2 ){
                replaceOperator(); 
                //printEquation = equationArray[0]+ addSpace + operatorHolderArray[0] + addSpace + equationArray[1] + addSpace + currentOperator+ addSpace +joinedNumber;
                printEquation = (equationArray[0] + addSpace + operatorHolderArray[0] + addSpace + equationArray[1]);
                printEquation += addSpace + operatorHolderArray[1]+ addSpace +joinedNumber;
                document.getElementById('equationDisplay').innerHTML= printEquation;      
                preEquals();
                    if ( operatorHolderArray.length >= 3 ) { // switch ? 
                    console.log("the printEquation: "+printEquation);
                    replaceOperator();
                    currentOperator = operatorHolderArray[operatorHolderArray.length -1]; 
                    console.log("the print equation is still: "+printEquation);
                    printEquation = 
                    printEquation += currentOperator + addSpace + joinedNumber;
                    document.getElementById('equationDisplay').innerHTML= printEquation;      
                    preEquals();
                } 
            }*/
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
        //}
    //}
//};
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
            //currentOperator = " + ";
    
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
        //currentOperator == " - ";

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
       // currentOperator = " ÷ ";

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
        //currentOperator = " x ";
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
    };     

function preEquals() {
    //take first number from array.
    if (joinedNumber <=9 ) {
        operandOne = equationArray[0]
        operandTwo = equationArray[1];
        operatorPull = operatorHolderArray[0];
        result = operators[operatorPull](operandOne,operandTwo);
        operandOne = result; 
        console.log("this is the result: "+result);

        }
    }


};

function equals(operatorPull) {
    equationString = document.getElementById('equationDisplay').textContent;
    //for 2 part equations.

    if ((typeof operandOne== 'undefined') ||operandOne == "") {
        equationArray.push(joinedNumber);
        document.getElementById('numberDisplay').innerHTML='';
        operatorPull = operatorHolderArray[operatorHolderArray.length -1 ];
        operandOne = equationArray[0];            
        operandTwo = joinedNumber;
        operatorPull = operatorHolderArray[0];
        result = operators[operatorPull](operandOne,operandTwo)
        let displayElement = document.getElementById("numberDisplay");
        let printNumber = document.createTextNode(result);
        displayElement.appendChild(printNumber);
        equationDisplay = document.getElementById("equationDisplay")
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

    else if (equationString.includes('=')  ) {
        //seems to stop extra equals signs.
    }    

    else {
        equationArray.push(joinedNumber);
        document.getElementById('numberDisplay').innerHTML='';
        operatorPull = operatorHolderArray[operatorHolderArray.length -1 ];
        operandTwo = joinedNumber;
        operatorPull = operatorHolderArray[operatorHolderArray.length -1];
        result = operators[operatorPull](operandOne,operandTwo)
        let displayElement = document.getElementById("numberDisplay");
        let printNumber = document.createTextNode(result);
        displayElement.appendChild(printNumber);
        equationDisplay = document.getElementById("equationDisplay")
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
