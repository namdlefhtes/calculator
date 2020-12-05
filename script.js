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

var addition = "";   
let tempArray = [] ;
let numArray = [];
let addArray = [];
var num = "";
//var paragraph = document.getElementById("numberDisplay");
//var printNumber = document.createTextNode(num);



function getNumber(num) {
    document.getElementById('numberDisplay').innerHTML='';
    let paragraph = document.getElementById("numberDisplay");
    let printNumber = document.createTextNode(num);
    paragraph.appendChild(printNumber);
    tempArray.push(num);  
    joinedNumber = Number(tempArray.join(""));
    numArray = [];
    numArray.push(joinedNumber);
    console.log(numArray);
};
// this function may need to be changed to operator which has different options for each.



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
    }

    else if (operation == subtract ) {

        calcNumber.one = Number(numArray);
        console.log(calcNumber.one);
        //holds first number from equation.
        tempArray = [];
        //reset number. and display.
        num = "";
        //add next part of equation.
        tempArray.push(num);
    }
        // target most recent operation selection?
        else if (operation == add && operation == equals) {
            document.getElementById('numberDisplay').innerHTML='';
            calcNumber.two = Number(numArray);
            let result = calcNumber.one + calcNumber.two ;
            let paragraph = document.getElementById("numberDisplay");
            let printNumber = document.createTextNode(result);
            paragraph.appendChild(printNumber);
            console.log(printNumber);
            console.log("equalstest");
            }


    };

    
    
    
   

