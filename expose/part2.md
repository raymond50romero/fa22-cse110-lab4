1) prints 3 because we declared i as a var so it is also visible outside the block
2) prints 150 because discountedPrice was declared as var so its visible outside the block
3) prints 150 because we are only changing its value in the loop but was declared outside 
4) it doesn't print but will return an array with the discounted prices because the variable 
    discounted was returned 
5) error, i is declared with let so it is not accesible outside the block scope 
6) error, discountedPrice is declared with let so it is not accesible outside the block scope 
7) prints 150 because finalPrice is being printed from the current block scope so let works 
8) returns an array with the discounted prices because discounted is declared in the same block 
    scope that it is being called from 
9) error, i is declared with let so it is not accesible outside the block scope 
10) prints 3 because length is declared in the current block scope 
11) returns a list of discounted prices because the variable that is returned, discounted, is 
    declared in the current block scope that it is being returned from 
12) 
    A) student.name
    B) student['Grad Year']
    C) student.greeting()
    D) student['Favorite Teacher'].name
    E) student.courseLoad[0]
13)
    A) 32 because 3 is a string and 2 is a integer 
    B) 1 because it turns 3 to an integer to compute the subraction
    C) 3 because we are adding with null
    D) 3null because 3 is a string and converts null to string 
    E) 4 because true is defined as 1
    F) 0 because false is mapped to 0 and doesn't add to anything with null
    G) 3undefined because it converts undefined to a string 
    H) NaN because undefined is nothing and you can't subract nothing from something 
14) 
    A) true because it turns 2 to a integer and compares 2>1
    B) false because the string 2 is greater than 12
    C) true because 2 is loosely equal to '2'
    D) false because 2 does not literally '2'
    E) false because true equals 1 as an integer 
    F) true because boolean(2) returns true and true literally is true
15)
    == - loosely equal to eachother 
    === - literally equal to eachother 
17)
    for each element in the array, the element is passed through the function that was passed in. 
    the function doubles the element and returns the value. the value then replaces the old value 
    in the array and the array is returned 
19) it will print out 1 4 3, and after a second prints 2
