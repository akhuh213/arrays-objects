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
    console.log(otherNumber);
    otherNumber += 1; 
    //number = otherNumber + 1; //
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

for (var i = 0; i < 10; i++) {
    console.log(i); //0,1,2,3,4,5,6,7,8,9
}

// print teams 

for (var i = 0; i < teams.length; i++) {
    //one way consol.log(teams[i]) -> this will print all the elements in the array
    var eachTeam = teams[i];
    console.log(eachTeam);
}



var peopleILove = ['Sean','Joshua','Daniel','Yoon']

for (var i = 0; i < peopleILove.length; i++) {
    var eachPerson = peopleILove[i];
    console.log(eachPerson);
}


const cars = ['Tesla', 'Honda', 'Toyota', 'Ford'];
console.log(cars);

for (let i = 0; i < cars.length; i++) {
    let eachCar = cars[i]; //Tesla, Honda ...
    console.log(eachCar);
}
