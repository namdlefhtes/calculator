/*
https://www.theodinproject.com/courses/foundations/lessons/calculator

*/

//try to store each value in array

// number array should keep track of each complete number. Only once an 
// once an operator is selected it should push that complete number to it.

//holds values. will need to use for multi part equations.
var calcNumber = {
 
one:"",
two:"",
three:"",
four: ""
};

let tempArray = [] ;
let numArray = [];
let addArray = [];
var num = "";

function getNumber(num) {
    if (num != isNaN && numArray.length <= 2) {
        //numArray.shift();
        //joinedNumber is the main number.
        tempArray.push(num);  
        joinedNumber = Number(tempArray.join(""));
        console.log(joinedNumber);
        numArray.push(joinedNumber);
        document.getElementById('numberDisplay').innerHTML='';
        let paragraph = document.getElementById("numberDisplay");
        let printNumber = document.createTextNode(joinedNumber);
        paragraph.appendChild(printNumber);
            // deletes extra number.
            if (numArray.length >= 3) {
                numArray.shift();
                console.log("number removed");        
            }
    }

    else if (num =="." )/*&& number display contains number and no decimal points */ {
        // adds decimal point. Invisible until 1st decimal place added.
        tempArray.push(num);
        numArray.push(joinedNumber);
        document.getElementById('numberDisplay').innerHTML='.';
        let paragraph = document.getElementById("numberDisplay");
        let printNumber = document.createTextNode(num);
        paragraph.appendChild(joinedNumber);
        
        }

};

function operator(sign) {

    if (sign == add) {
        tempNumber = Number(numArray);
        console.log("plus");
        //holds first number from equation.
        tempArray = [];
        //reset number. and display.
        num = "";
        //add next part of equation.
        tempArray.push(num);
        selectedOperator = add;
    }

    else if (sign == subtract) {
        tempNumber = Number(numArray);
        tempArray = [];
        num = "";
        tempArray.push(num);
        selectedOperator = subtract;
    
        }

    else if (sign == divide) {
        tempNumber = Number(numArray);            
        tempArray = [];            
        num = "";            
        tempArray.push(num);            
        selectedOperator = divide;           
        }
        
    else if (sign == multiply) {
        tempNumber = Number(numArray);            
        tempArray = [];            
        num = "";            
        tempArray.push(num);            
        selectedOperator = multiply;           
        }

    // not yet working.
    else if (sign == 'clear') {
        console.log("clear");
        numArray = [];       
        tempArray = [];            
        num = "";   
        tempNumber = "";
        selectedOperator = '';   
        getNumber(0);
        console.log("this is the numArray"+ numArray); 
      ;
    }
;     
    };

function equals(selectedOperator) {
    // refactor to use single array with positions I think.
    if (selectedOperator == add) {
        console.log("equals");  
        document.getElementById('numberDisplay').innerHTML='';
        let result = Number(numArray[0] + numArray[1]);
        console.log(result);
        let paragraph = document.getElementById("numberDisplay");
        let printNumber = document.createTextNode(result);
        paragraph.appendChild(printNumber);
    }

    else if (selectedOperator == subtract) {
        //numArray.shift();
        document.getElementById('numberDisplay').innerHTML='';
        let result = Number(numArray[0] - numArray[1]);
        console.log(result);
        let paragraph = document.getElementById("numberDisplay");
        let printNumber = document.createTextNode(result);
        paragraph.appendChild(printNumber);
    }
       
    else if (selectedOperator == divide) {
        //numArray.shift();
        document.getElementById('numberDisplay').innerHTML='';
        let result = Number(numArray[0] / numArray[1]);
        console.log(result);
        let paragraph = document.getElementById("numberDisplay");
        let printNumber = document.createTextNode(result);
        paragraph.appendChild(printNumber);
        
    }
    
    else if (selectedOperator == multiply) {
        //numArray.shift();
        document.getElementById('numberDisplay').innerHTML='';
        result = Number(numArray[0] * numArray[1]);
        console.log(result);
        let paragraph = document.getElementById("numberDisplay");
        let printNumber = document.createTextNode(result);
        paragraph.appendChild(printNumber);
    }


};
