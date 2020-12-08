/* function that grabs value for each button clicked and writes it to tom in display div.
likely requires object to store each value to avoid have one function per button. 

check 

https://www.theodinproject.com/courses/foundations/lessons/calculator

*/

//try to store each value in array.



// number array should keep track of each complete number. Only once an 
// once an operator is selected it should push that complete number to it.

//holds values.
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
//var paragraph = document.getElementById("numberDisplay");
//var printNumber = document.createTextNode(num);

function getNumber(num) {
    if (num != isNaN) {
        document.getElementById('numberDisplay').innerHTML='';
        let paragraph = document.getElementById("numberDisplay");
        let printNumber = document.createTextNode(num);
        paragraph.appendChild(printNumber);
        tempArray.push(num);  
        joinedNumber = Number(tempArray.join(""));
        numArray = [];
        numArray.push(joinedNumber);
        console.log(numArray);
    }
    else if (num == '.' )/*&& number display contains number and no decimal points */ {
        document.getElementById('numberDisplay');
        let paragraph = document.getElementById("numberDisplay");
        let printNumber = document.createTextNode(num);
        tempArray.push(num);
        joinedNumber = Number(tempArray.join(""));
        numArray.push(joinedNumber);
        console.log(joinedNumber + "decimal test");

        }

    else {
        document.getElementById('numberDisplay').innerHTML='';
        let paragraph = document.getElementById("numberDisplay");
        let printNumber = document.createTextNode("");
        
    }

};

function operator(operation) {
    if (operation == add) {
        calcNumber.one = Number(numArray);
        console.log(calcNumber.one);
        //holds first number from equation.
        tempArray = [];
        //reset number. and display.
        num = "";
        //add next part of equation.
        tempArray.push(num);
        operator = add;
    }

    else if (operation == subtract) {
        calcNumber.one = Number(numArray);
        console.log(calcNumber.one);
        tempArray = [];
        num = "";
        tempArray.push(num);
        operator = subtract;
    
        }

    else if (operation == divide) {
        calcNumber.one = Number(numArray);            
        console.log(calcNumber.one);            
        tempArray = [];            
        num = "";            
        tempArray.push(num);            
        operator = divide;           
        }
        
    else if (operation == multiply) {
        calcNumber.one = Number(numArray);            
        console.log(calcNumber.one);            
        tempArray = [];            
        num = "";            
        tempArray.push(num);            
        operator = multiply;           
        }
// not yet working.
    else if (operation == clear) {
        document.getElementById('numberDisplay').innerHTML='';
        let paragraph = document.getElementById("numberDisplay");
        let printNumber = document.removeChild(paragraph);
        calcNumber.one = "";            
        tempArray = [];            
        num = "";            
        tempArray.push("");            
        console.log("no operator selected");
        numArray = [""];
        
    }
     
    };

function equals(operator) {

    if (operator == add) {
        document.getElementById('numberDisplay').innerHTML='';
        calcNumber.two = Number(numArray);
        let result = calcNumber.one + calcNumber.two ;
        let paragraph = document.getElementById("numberDisplay");
        let printNumber = document.createTextNode(result);
        paragraph.appendChild(printNumber);
        console.log(printNumber);
    }

    else if (operator == subtract) {
        document.getElementById('numberDisplay').innerHTML='';
        calcNumber.two = Number(numArray);
        let result = calcNumber.one - calcNumber.two;
        let paragraph = document.getElementById("numberDisplay");
        let printNumber = document.createTextNode(result);
        paragraph.appendChild(printNumber);
        console.log(printNumber);
    }
       
    else if (operator == divide) {
        document.getElementById('numberDisplay').innerHTML='';
        calcNumber.two = Number(numArray);
        let result = calcNumber.one / calcNumber.two;
        let paragraph = document.getElementById("numberDisplay");
        let printNumber = document.createTextNode(result);
        paragraph.appendChild(printNumber);
        console.log(printNumber);
    }
    
    else if (operator == multiply) {
        document.getElementById('numberDisplay').innerHTML='';
        calcNumber.two = Number(numArray);
        let result = calcNumber.one * calcNumber.two;
        let paragraph = document.getElementById("numberDisplay");
        let printNumber = document.createTextNode(result);
        paragraph.appendChild(printNumber);
        console.log(printNumber);
    }


};
