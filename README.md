# calculator
odinCalculator


2020-12-18
numberHolderArray is holding initial values. last value to be passed in at equals function.

to do:

set up array to store operators in order they are called.
get equals to calculate based on stored operators + contents of numberHolderArray.

2020-12-20

keep working on equals function. 

2020-12-21

current issue: 

I have one operatorHolderArray that stores my operators, and valueHolderArray that stores my operand numbers.

I can't get them to interact as an equation in the result at line 136.  

keep working on this

2020-12-22

equals still not working. trying for loop to feed in each number from valueHolderArray. 

2020-12-23

breakthrough. Basic Equations working now with equals() . need to set up for multi-part equations but on the right path. I think new variable to concatenate the results of each bit of the equation will be necessary. 

2020-12-24 

extremely close I think. Resume at equals() function. Once operandTwo stores 3rd value for 3 part equation. it should work.

2020-12-25

reworking a bit. added preEquals function to take care of combining first parts of the equation as clicking the equals button and firing equals() was causing issues. should be better. 

2020-12-26

closer. changed numbers to print above results of equation. Problem is numbers are printing multiple times in display now. 

2020-12-28

math is actually working, but the display isn't working quite how I'd like.

I want it to show "11 + 22 + 66 =" but it is displaying the calculated new operandOne of "33" and showing "33 + 66 =" instead. Also need to investigate equations with 4 or more parts. 

work on CSS/design to make things bigger. It will be easier to troubleshoot.

2020-12-29

display is sort of working, but it adds an extra number to the 3rd operand. I need to refactor code as it is not clear to me why I have tempNumberPush(numArray). I think this can be handled exclusively in getNumber() and operator(sign) .

2020-12-30

set up dev branch to refactor js. 

not even sure what the problem is. keep working on equals() and preequals. 

2020-12-31

preEquals is  replacing operandOne with calculated value properly.

it needs to grab first two values from equationArray, and store in operandOne and operandTwo. Then, have the selected operator act on
these two and place the result to replace the value in operandOne.

problem seems to arise when > 1 digit number is added in third place of equation.   

equals and preequals is messed up. 

2021-01-04

took a few days off. 

getNumber() is screwing up the display when numbers greater than 9 are to be displayed. 

2021-01-05

preequals seems to work for multi-part addition and subtraction but not mixed. 

2021-01-06

math seems to be working. now display for the third digit or multi part is acting up again... troubleshoot in function preEquals()

2021-01-08 

troubleshoot printEquation stuff. still displaying third digit on multipart wrong. 

2021-01-11 

set printEquation to gradually contain all parts of the equation. GetNumber parts have to run in order then.

tried nesting but getNumber is really screwed up. Too much of the code relies on it though. 

keep trying to refactor getNumber()

2021-01-12

math working for most part. weird divide bug after clearing once. throws divide by zero error for other division types. 

2021-01-13

working on a loop to maintain printing of 'x' and '÷' in two part and multipart equations. Multipart is complicated as may need to loop through without that section to get operators in order. 

2021-01-15

- get number keys to activate buttons. look into keydown events.

2021-01-17

- have working eventlistener for numbers on keyboard at line 26 and passed through the '+' sign, 
but this breaks the displayed number. 

2021-01-18

working typed numbers and operators, and equals, and clear. Work on css and layout next time!

2021-01-19
working on css. cannot centre this thing. 

2021-01-20 
fixed decimal keypress. Need to figure out spacing for buttons in css. probably a full overhaul. 

2021-01-21 
spacebar creates issue. I think this is because of my space variable. rehashing css from ground up.

2021-01-22
working on css layout. need to fix spacebar issue still. 

2021-01-23 

space bar adds zeroes. cannot use negative integers. lay out is ok.

refactor getNumber printEquation is a mess and cannot scale to multipart equations.

2021-01-24 

setup function generatePrintEquation() to make make printEquations for varying operatorHolderArray.length. 

2021-01-25
possible two loops could do this. one for equationArray and one for operatorHolderArray. 

got display working for up to 3 operators at line 136. math is off after equals. Preequals will need an option to handle multi-part too. 

2021-01-26 

preequals needs to be able to process multiparts properly. constant shifting of equation to operandOne and operandTwo. achieve with loop? switch?

2021-01-27 

line 252 of preEquals() works for 4 parts if last number is single digit. 

Maybe I should be storing each section of the equation as an individual object, then loop through at Equals.. Go back and do Foundations part 5 (objects). 

2021-01-28

somehow broke equals when trying to make it process MULTI DIGITs for last joined number.

2021-01-29 

fixed equals... for single part. now doesn't work for multi-

2021-02-01 

realized number clicking was broken... this is mostly fixed now . Multi part still not good. getNumber() needs to be simplified. too many arrays and vars.

2021-02-02

I think to fix equals clicking requires moving it up higher in script so it can fire before the mention in key press. fixing decimal will be similar. equals needs to be refactored as it is extremely verbose. 

2021-02-03

moved equals and preequals.
come back to line 101 to fix displaying for > 10 of 3rd digit number. 

2021-02-04

code is gross, but it is working for 2 operator equations with any amount of digits. decimal does not work. Fix the decimal then move on.

I believe this could be achieved through a loop, but I am not sure how to go about doing it. 

I started a loop in the code to alternate between values in equationArray and operatorHolderArray. May need to use .join or .concat


2021-02-05 

felt close at 146, but not really. need a way to join alternating values. not as simple as I thought. 

2021-02-06 
figured out simple way to handle displaying multi-part equation. math not working, but display is with loop. 

preEquals() needs to be refactored to do something similar, so it can continuously shift the result to operand One automatically to calculate any length equation.

2021-02-07

preEquals and dispaly appear to be working. need to test further.

2021-02-08

fixed decimal issue. 