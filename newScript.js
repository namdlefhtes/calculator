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
let space = " ";
//let currentOperator = "";

let operators = {
    '+': function(operandOne,operandTwo) {return operandOne + operandTwo },
    '-': function(operandOne,operandTwo) {return operandOne - operandTwo },
    '*': function(operandOne,operandTwo) {return operandOne * operandTwo },
    '/': function(operandOne,operandTwo) {return operandOne / operandTwo },
};

document.addEventListener("keydown", function(event)   {
    let pressedKey = event.key;
    
     if ( pressedKey >= 0 || pressedKey <= 9 ) {
        num = Number(pressedKey);
        getNumber(num); 

     }
 
      else if ( pressedKey == "+" || pressedKey == "-" || pressedKey == "/" || pressedKey == "x" ) {
          console.log(pressedKey+"test");

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
          }
      }  
        else if ( pressedKey == '=' || pressedKey == 'Enter' ) {
            equals('=');
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
                console.log(operatorHolderArray[i]);
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
        printEquation= document.createTextNode(joinedNumber);
        equationDisplay.appendChild(printEquation);
            if (operatorHolderArray.length == 1 ) { // two operand equations.
                replaceOperator();
                printEquation = (equationArray[0] + space + currentOperator + space + joinedNumber);
                document.getElementById('equationDisplay').innerHTML= printEquation;      
            }

            else if ( operatorHolderArray.length ==2 ){
                //a loop may be able to handle this part below.
                console.log("firing replaceOperator now");
                replaceOperator(); 
                console.log(currentOperator+"testingthis");
                printEquation = equationArray[0]+ space + operatorHolderArray[0] + space + equationArray[1] + space + currentOperator+ space +joinedNumber;
                document.getElementById('equationDisplay').innerHTML= printEquation;      
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
    }
;     

function preEquals() {
    //take first number from array.
    if (joinedNumber <=9 ) {

        operandOne = equationArray[0]
        operandTwo = equationArray[1];
        operatorPull = operatorHolderArray[0];
        result = operators[operatorPull](operandOne,operandTwo);
        //equationArray.push(joinedNumber);
        operandOne = result; 
       // equationArray = [];
       // equationArray.push(operandOne);
        //equationArray.push(operandTwo);
    }


};

function equals(operatorPull) {
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

    }
    else if (operandTwo === 0 && selectedOperator == '/') {
        document.getElementById('errorDisplay').innerHTML='';
        let errorElement = document.getElementById("errorDisplay");
        let printError = document.createTextNode("Error: Dividing by zero may result in the Universe imploding. Please refrain.");
        errorElement.appendChild(printError);
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
        }

         
    };

