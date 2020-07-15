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


//objects
//key: value pairs

const alice = {
    fullName: 'Alice Aekyung Huh',
    age: 35,
    myLocation: 'Virginia',
    placesTraveled: ['Japan', 'Malaysia', 'Hong Kong', 'Maldive']
}

console.log(alice);
//mylocoation
console.log(alice.myLocation);

//print Malidve

console.log(alice.placesTraveled[3]);


const myCoolPost = {
    username: '@alice',
    likes: 1200,
    comments: ['nice', 'woah', 'love it', 'yeah'],
    caption: 'Day 3 of SEI',
    picture: 'https://instagram.com/....',
    shares: 12
}

console.log(myCoolPost);

//adding key, value in object 
myCoolPost.myLocation = 'New York';
console.log(myCoolPost);

//instagram post object 

const myInstagramPost = {
    username: 'aliceeeak',
    likes: 200,
    comments: ['love this!', 'I miss you!'],
    caption: 'busy days',
    picture: 'https://instagram.com/',
    share: 15
}

console.log(myInstagramPost);
console.log(myInstagramPost.comments[1]);

let sentence = "I'm cool";
let sentenceTwo = 'I\'m cool too';

const FourthOfJulyPost = {
    username: 'alicee'
};

FourthOfJulyPost.picture = 'https://instagram.com/...';
FourthOfJulyPost['likes'] = 15;//we can write this way
FourthOfJulyPost.comments = ['oka..'];
FourthOfJulyPost.caption = 'writing code on the 4th';

console.log(FourthOfJulyPost);

//Functions  
console.log('Hello');
//three ways to wirte functions 

//standard
function sayHello() {
    //write my code
    //wirte your logic
    console.log('Hello');
}

sayHello();
sayHello();
//2. function expression 
const sayHelloAgain = function() {
    console.log('Hello Again');
};

sayHelloAgain();

//3. arrow function
const sayHelloFinal = () => {
    console.log('Hello world')
}

sayHelloFinal()

//const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const otherNumbers = [10, 20, 30, 40]

function printNumbers(nums){
    console.log(nums); //place holders in parameters; I can call whatever I want 
}   //doesn;t have to be the same as const
//printNumbers(numbers);
//printNumbers(otherNumbers);

function printNumbers(yes) {
    for (let i = 0; i < yes.length; i++) {
        let num = yes[i];

        if (num < 30) {
            console.log("This number is less than 30: " + num);
        } else {
            console.log("This number is greater than 30: " + num);
        }
    }
}

//printNumbers(numbers);
printNumbers(otherNumbers);

//return 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function addNumbers(array) {
    let result = 0;
    //make line between logic and object
    for(let i = 0; i <array.length; i++){
        let num = array[i]; //1,2,3...9

        result += num; //1,3,6,10,15 ...
    }

    return result; 

}

console.log(addNumbers(numbers));

let myResult = addNumbers(numbers);
console.log(myResult);