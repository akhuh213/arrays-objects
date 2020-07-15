var name = 'Alice';
console.log(name);

var myLocation = 'Virginia'
console.log(myLocation);

var favoriteNumber = 6;
console.log(favoriteNumber);

var teams = ['Rockets','Lakers','Warriors','Clippers','Blazers','Celtics','Nets'];
console.log(teams);

// while loops
var number = 10;
var otherNumber = 1
while (otherNumber < number) {
    console.log(number);
   // otherNumber += 1; 
    otherNumber = otherNumber + 1; //
    //it says otherNumber = otherNumber + 1; will check the condition again and if the condition is true, 
    //will print again, and go back to the loop again till reach the number which is 10.
}

var numberTwo = 20;
var myOtherNumber = 10;
while (myOtherNumber < numberTwo) {
    console.log(myOtherNumber);//10
    myOtherNumber += 1;
}

var myNumber = 1;
var secondNumber = 10;
while (secondNumber > myNumber) {
    console.log(myNumber);
    myNumber += 2;
}