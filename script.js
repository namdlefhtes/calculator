/*
https://www.theodinproject.com/courses/foundations/lessons/calculator

*/

//try to store each value in array

// number array should keep track of each complete number. Only once an 
// once an operator is selected it should push that complete number to it.

//holds values. will need to use for multi part equations. not sure it will work as I want.

var numberHolderArray = [];
var operatorHolderArray = [];
let tempArray = [] ;
let numArray = [];
let equationArray = [];
//let addArray = [];
var num = "";

function pushToHolder() {
 if ( equationArray.length >= 1) {
    
    numberHolderArray.push(equationArray[equationArray.length -1]);
    console.log(numberHolderArray + "This is the numberholder");
    operatorHolderArray.push(selectedOperator);
    }; 
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
        tempNumber = Number(numArray);
        equationArray.push(numArray[numArray.length -1]);
        console.log("plus");
        //holds first number from equation.
        tempArray = [];
        //reset number. and display.
        num = "";
        //add next part of equation.
        tempArray.push(num);
        selectedOperator = 'add';
        pushToHolder();
     
        //document.getElementById("equationDisplay").innerHTML = equationArray + " + ";
    }

    else if (sign == 'subtract') {
        tempNumber = Number(numArray);
        equationArray.push(numArray[numArray.length -1]);
        tempArray = [];
        num = "";
        tempArray.push(num);
        selectedOperator = 'subtract';
        pushToHolder();

    
        }

    else if (sign == 'divide') {
        tempNumber = Number(numArray);    
        equationArray.push(numArray[numArray.length -1]);        
        tempArray = [];            
        num = "";            
        tempArray.push(num);            
        selectedOperator = 'divide';    
        pushToHolder();
       
        }
        
    else if (sign == 'multiply') {
        tempNumber = Number(numArray);
        equationArray.push(numArray[numArray.length -1]);            
        tempArray = [];            
        num = "";            
        tempArray.push(num);            
        selectedOperator = 'multiply';   
        pushToHolder();
        
        }

    // not yet working.
    else if (sign == 'clear') {
        console.log("clear");
        numArray = [];       
        tempArray = [];            
        num = "";   
        tempNumber = "";
        selectedOperator = '';   
        numberHolderArray = [];
        document.getElementById("equationDisplay").innerHTML = "";
        getNumber(0);
    }
       //adds most recent number to numberHolderArray following

      
    }
;     
   
/* refactor to calculate and store in numberHolderArry  
automatically everytime second part as added, not on equals. 
will need to store operator signs in correct order too.

*/

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

}