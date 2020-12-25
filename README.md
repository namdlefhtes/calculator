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