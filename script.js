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
    
        tempArray.push(num);  
        joinedNumber = Number(tempArray.join(""));
        //return joinedNumber;
        console.log(joinedNumber);
        numArray.push(joinedNumber);
        document.getElementById('numberDisplay').innerHTML='';
        let paragraph = document.getElementById("numberDisplay");
        let printNumber = document.createTextNode(joinedNumber);
        paragraph.appendChild(printNumber);

    }

    else if (num == '.' )/*&& number display contains number and no decimal points */ {
        
        tempArray.push(num);
        joinedNumber = Number(tempArray.join(""));
        numArray.push(joinedNumber);
        document.getElementById('numberDisplay');
        let paragraph = document.getElementById("numberDisplay");
        let printNumber = document.createTextNode(num);

        }

   /* else {

        document.getElementById('numberDisplay').innerHTML='';
        let paragraph = document.getElementById("numberDisplay");
        let printNumber = document.createTextNode("");
        
    } */

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

        calcNumber.one = "";            
        tempArray = [];            
        num = "";            
        console.log("no operator selected");
        //numArray.pop = ;   
    }
     
    };

function equals(operator) {
    // refactor to use single array with positions I think.
    if (operator == add) {
        document.getElementById('numberDisplay').innerHTML='';
        calcNumber.two = Number(numArray);
        let result = calcNumber.two[0] + calcNumber.two[1];
        console.log(result);
       // let result = calcNumber.one + calcNumber.two;
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
