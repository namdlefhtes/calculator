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

