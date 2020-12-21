/*
https://www.theodinproject.com/courses/foundations/lessons/calculator

*/

//try to store each value in array

//holds values. will need to use for multi part equations. not sure it will work as I want.

var valueHolderArray = [];
var operatorHolderArray = [];
let tempArray = [] ;
let numArray = [];
let equationArray = [];
var num = "";

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
    valueHolderArray.push(equationArray[equationArray.length -1]);
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
        let displayElement = document.getElementById("numberDisplay");
        let printNumber = document.createTextNode(joinedNumber);
        displayElement.appendChild(printNumber);
        console.log(joinedNumber);
          
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

        //document.getElementById("equationDisplay").innerHTML = equationArray + " + ";
    }

    else if (sign == 'subtract') {
        tempNumberPush(numArray);
        selectedOperator = 'subtract';
        pushToHolder();
        }

    else if (sign == 'divide') {
        tempNumberPush(numArray);        
        selectedOperator = 'divide';    
        pushToHolder(); 
        }
        
    else if (sign == 'multiply') {
        tempNumberPush(numArray);            
        selectedOperator = 'multiply';   
        pushToHolder();  
        }

    else if (sign == 'clear') {
        console.log("clear");
        numArray = [];       
        tempArray = [];            
        num = "";   
        tempNumber = "";
        selectedOperator = '';   
        valueHolderArray = [];
        operatorHolderArray = [];
        document.getElementById("equationDisplay").innerHTML = "";
        getNumber(0);
    }
  

      
    }
;     
   
/* refactor to calculate and store in valueHolderArry  
automatically everytime second part as added, not on equals. 
will need to store operator signs in correct order too.

*/

function equals() {
    //takes most recent number from numArray.
    equationArray.push(numArray[numArray.length -1]);
    document.getElementById('numberDisplay').innerHTML='';
    valueHolderArray.push(equationArray[equationArray.length -1]);
    // need to pass in operator type to have it add/subtract/etc the first two values. 
    var result = valueHolderArray[0] + operatorHolderArray[0] + valueHolderArray[1]; 

    let displayElement = document.getElementById("numberDisplay");
    let printNumber = document.createTextNode(result);
    displayElement.appendChild(printNumber);
    //document.getElementById("equationDisplay").innerHTML = num1 + " + " + num2 + " = ";
           

        
    };

 /* I think this will have to be a loop to go through possible number of parts of equation.
    let result = Number(valueHolderArray[i]) + operatorHolderArray[i];
    
        }
   */ 



/* SETTING UP NEW EQUALS above
function equals(selectedOperator) {
    // refactor to use single array with positions I think.
    if (selectedOperator == 'add') {
        equationArray.push(numArray[numArray.length -1]);
        console.log("equals");  
        document.getElementById('numberDisplay').innerHTML='';
        num1 = equationArray[equationArray.length -2]; 
        num2 = equationArray[equationArray.length -1];
        let result = Number(num1 + num2);
        console.log(result);
        let displayElement = document.getElementById("numberDisplay");
        let printNumber = document.createTextNode(result);
        displayElement.appendChild(printNumber);
        document.getElementById("equationDisplay").innerHTML = num1 + " + " + num2 + " = ";
    }
    else if (selectedOperator == 'subtract') {
        equationArray.push(numArray[numArray.length -1]);
        console.log("equals");
        document.getElementById('numberDisplay').innerHTML='';
        num1 = equationArray[equationArray.length -2]; 
        num2 = equationArray[equationArray.length -1];
        let result = Number(num1 - num2);
        console.log(result);
        let displayElement = document.getElementById("numberDisplay");
        let printNumber = document.createTextNode(result);
        displayElement.appendChild(printNumber);
        document.getElementById("equationDisplay").innerHTML = num1 + " - " + num2 + " = ";
    }
       
    else if (selectedOperator == 'divide') {
        equationArray.push(numArray[numArray.length -1]);
        console.log("equals");
        document.getElementById('numberDisplay').innerHTML='';
        num1 = equationArray[equationArray.length -2]; 
        num2 = equationArray[equationArray.length -1];
        let result = Number(num1 / num2);
        console.log(result);
        let displayElement = document.getElementById("numberDisplay");
        let printNumber = document.createTextNode(result);
        displayElement.appendChild(printNumber);
        document.getElementById("equationDisplay").innerHTML = num1 + " ÷ " + num2 + " = ";

            if (result == Infinity) {
                displayElement = document.getElementById("numberDisplay");
                 printNumber = document.createTextNode("Error: Division by 0 attempted. Abort");
                 displayElement.appendChild(printNumber);
            }
        
    }
    
    else if (selectedOperator == 'multiply') {
        equationArray.push(numArray[numArray.length -1]);
        console.log("equals");
        document.getElementById('numberDisplay').innerHTML='';
        num1 = equationArray[equationArray.length -2]; 
        num2 = equationArray[equationArray.length -1];
        result = Number(num1 * num2);
        console.log(result);
        let displayElement = document.getElementById("numberDisplay");
        let printNumber = document.createTextNode(result);
        displayElement.appendChild(printNumber);
        document.getElementById("equationDisplay").innerHTML = num1 + " x " + num2 + " = ";
    }

} */