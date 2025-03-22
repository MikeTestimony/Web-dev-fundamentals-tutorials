

document.getElementById("p2").style.color = "blue";

//variable declaration
let person = "John Doe",
carName = "Volvo",
price = 200;

console.log(price)
let inp;
console.log(inp);

//var can be redeclared and reassigned
var inp2;
inp2=675;
console.log(inp2);
var inp2=111;
console.log(inp2);
//scope concept in js
{let inp=343535;
console.log(inp)
let name= "Mike "+"Testimony"
console.log(name)}

//$ treated as a letter in js
let $="The mount is in the main account";
console.log($)
let $$= 'The total amonuit is in the main wallet'
console.log($$)

//var keyword usage
Myname="Michael";
var Myname;
console.log(Myname)
//const
const MyName ='Gervase';
console.log(MyName);

//concatenating string and integer

let x = 10;
console.log('The value is: '+x);
x += 5;
console.log('The value is: '+x);

//increamenting assignment
let y="Mike";
y +=50
console.log(y)

console.log(typeof y );

//equality comparism
console.log(true==1)
console.log("5"==5)
console.log(true===1)

z= 6;
console.log("Comparism")
console.log(z==x)
console.log(z==x ||z<=x)
console.log(z!==x &&z<=3)

// functions
function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

let value = toCelsius;
console.log(toCelsius(50));
console.log(toCelsius(100));
console.log(value(100));

//Local and global variables
function greeting(userName) {
  console.log("Hello! "+userName+" How are you doing?")
  this.myGlobalVariable="Fred";
  console.log(myGlobalVariable)
}
console.log(greeting('Mike'))

console.log(myGlobalVariable)

//js objects

const cat={
  Cat_name:"Curley",
  age:3,
  color:"black",
  eye_color: "blue",
  call: function(){
    console.log("Hello! ");
  }
};

console.log(cat.age);
console.log(cat.color);
console.log(cat.Cat_name);
cat.call();
console.log(cat['eye_color'])

//object declaration
const MyCars={};

//appending properties to the object

MyCars.name="BMW";
MyCars.color="red";
MyCars.age=2;
MyCars.location="Kumasi"

console.log(MyCars['location'])
console.log(MyCars.color)

// creating an object using the new object() constructor
const per_son = new Object();

//adding proprties to the object

per_son.Nam="Testimony";
per_son.age=25;
per_son.eyeColor="black";
per_son.currentPosition="Student"

console.log(per_son.currentPosition)
console.log(per_son.Nam)
delete per_son.eyeColor
console.log(per_son.eyeColor)




// nested objects

const NestedObj={
  Name:"Alex",
  Age: 35,
  interest: {
    primary: "Creative arts",
    secondary:"Playing of Lawn tennis",
    general: "Languages, history,research",
    full:{ 
      other: "Every other interest included here"
    }
  }
}
console.log(NestedObj.Name);
console.log(NestedObj.interest.general);
console.log(NestedObj.interest.full.other);
console.log(NestedObj["interest"]["primary"]);


const PerSon = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function() {
    return this.firstName + " " + this.lastName.toLocaleUpperCase();
  }
};
console.log(PerSon.fullName());

let Val=Object.values(PerSon)
console.log(Val)

// const Mike={};

//Using the "new keyword to create multiple objs"
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

//creating multiple objects of the same type
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
const mySister = new Person("Anna", "Rally", 18, "green");

const mySelf = new Person("Johnny", "Rally", 22, "green");
console.log("About my Dad: ")
console.log(myFather.firstName)

//print an alert
// window.alert('Hello welcome')
// print a promt
// window.prompt("How old are you?")

//confirm()
// window.confirm("Are you sure you want to delete it?")

// console.log("Code with Passion");
// console.log("Building Solutions, One line at a time...");
// console.log("May your code be efficient, your bugs be few");


// console.log("Code, test, debug, repeat");
// console.log("The never-ending cycle of coding");



// console.log("Coding: where a semicolon can change everything");
// console.log("It is fun but...");


let userName="He said 'How are you doing?'";
console.log(userName)
 let User="We are the so-called \"MKZ\" \"on the main campus\""
 console.log(User)
//string template
 const name = 'John';
const age = 30;

const sentence = `My name is ${name} and I am ${age} years old.`;

console.log(sentence);

//number and sting concatenation
// let p = 10;
// let s = 20;
// let z;
// z= "30";
// let result = p + s + z;
// console.log(result)

//NaN
let mk=20;
let vb="ball";
let ff=mk/vb;
console.log(ff)
console.log(isNaN(ff))

//infinity
let myNum = 2;
// Execute until Infinity
while (myNum != Infinity) {
  myNum = myNum * myNum;
}
console.log(myNum)

//chaning the number bases
let myNumber = 32;
myNumber.toString(32);
myNumber.toString(16);
myNumber.toString(12);
myNumber.toString(10);
myNumber.toString(8);
myNumber.toString(2);
console.log(myNumber);

// big int
let xx = 1234567890123456789012345n;
let yy = BigInt(1234567890123456789012345)
 console.log(typeof(xx));
 console.log(xx);
 console.log(typeof(yy));
 console.log(yy);

 //numbers methods
 let ad = 9.656;
ad.toExponential(2);
console.log(ad);
ad.toString(2);
console.log(ad)

//  console.log(document.getElementById('myDiv').innerHTML);
//  console.log(document.getElementById('myDiv').innerText);
//  console.log(document.getElementById('myDiv').innerContent="I am fine");
const myArray=[];
myArray[0]='Mike';
myArray[1]='Debuo';
myArray[2]='Testimoy';

console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray.length)
myArray[2]='UMaT';

console.log(myArray[2]);

//popping from an array(removing the lst item)
myArray.pop();
console.log(myArray.length)

//pushing(appending to the end of the array)
myArray.push('Tarkwa');
console.log(myArray[2]);
console.log(myArray.length);

//shift(): (removing the 1st item and shifting the rest to a lower index)

myArray.shift();
console.log(myArray[0]);
console.log(myArray.length);

//unshif():(adding item to the first position)
myArray.unshift('Ama');
console.log(myArray[0]);
console.log(myArray.length);
console.log(myArray);

//generation of Random numbers
let rand = Math.floor(Math.random() * 100);
console.log(rand);

//floor
num1=23.455;
console.log(Math.floor(num1));
//ceil
console.log(Math.ceil(num1));
//rounding
console.log(Math.round(num1));

//date in js

myDate= new Date();
console.log(myDate);

//short short
console.log(myDate.toLocaleDateString());

//display only time
console.log(myDate.toLocaleTimeString());

//inputing my own date
myDate2 = new Date('2025 6 17');
console.log(myDate2);
console.log(myDate2.toLocaleDateString());

// modulus
var remainder;
remainder=10%3;
console.log("The remainder division of 11 and 3 is : ");
console.log(remainder);

//compound assignment
var as=10;
var ssd=20;
var hd=30;

var dh = hd--;
console.log(dh);
console.log("post decrementing");

console.log(hd);
 
console.log(ssd);

ssd =ssd+15;
console.log(ssd);
ssd += 5;
console.log(ssd);

// using the backtick to create multiline string

var multi=(`This is for making multiple lines as string in javasript.
 There are several ways of doing the samething`)
 console.log(multi)

 //multidimensional array or a nested array.

nestedArray=[[12,44,56],[20,23,55],[39,90,100]];
//accessing value in a nested array
console.log('This is a nested array')
console.log(nestedArray[2][2])
 // adding item to a nested array

 nestedArray.push([11,111,111]);
 console.log(nestedArray);

 //rermoving form an array and saving it in a variable

 var removeArray =  nestedArray.pop();
 console.log('This is a popped item from an array put in a variable');
 console.log(removeArray);
 console.log(nestedArray);

 //shift function fo multi-dimentional array 

 var shiftArray = nestedArray.shift();
 console.log(shiftArray);
 console.log(nestedArray);

 // unshift ()
 var unShift = nestedArray.unshift([1111,222,333]);
//  console.log(unshift);
 console.log(nestedArray);

//while loop to add elements to an empty array
const newArray=[];

console.log(newArray)
var i = 0;
while(i < 5)
{
  newArray.push(i);
  i++;
}

console.log(newArray)


//predcrementing
while(i < 5)
  {
    newArray.push(i);
    ++i;
  }
  
  console.log(newArray)

  //for loop

  const ourArray=[];
  console.log(ourArray)

  for(var i=1; i <10; i++){
    ourArray.push(i)
  }

  //for in loop

  const person2 = {fname:"John", lname:"Doe", age:25};

let text = "";
for (let x in person2){
  text += person2[x];
}
console.log("for-in loop in js");
console.log(person2);

//break and continue keywords
for (let i = 0; i < 10; i++) {
  if (i === 3) { break; } //breaking point
  console.log(i);
}
console.log("The end using the break")

for (let i = 0; i < 10; i++) {
  if (i === 3) { continue; } //skipping point
  console.log(i);
}
console.log("The end using the continue")

//breaking string

let yyy = "Hello\
World! weare done";

console.log(yyy)





  
//do while statement

// do{
//   console.log('Hello! you are specially welcome to the coe camp');
// } while(
//   true
// )

var i = 1;
do{
console.log(i);
i++;
} while(i>=6)

  //using do-while to populate an array
  const fiArray= [];
  var j=1;
  do{
    fiArray.push(j)
    j++;
} while(j<=6);

console.log(fiArray);

//switch statement
  console.log("The output below is from a switvh statement")
let day = 'Monday';
switch (day) {
  case 'Monday':
    console.log('Today is Monday');
    break;
  case 'Tuesday':
    console.log('Today is Tuesday');
    break;
  default:
    console.log('Today is not Monday or Tuesday');
    console.log("Thank you!")
}

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}

let numbers = [1,2,3,4,5];
let len= numbers.length;

for( let num = 0; num<len; num++ ){
   console.log( numbers[num] );
}

// for- in loop

const students = {
  firstName : 'Mike',
  lastName : 'Testimony',
  age : 27,
  course : 'computer science',
  school : 'UMaT'
};

console.log(students.firstName);
console.log(students.lastName);
console.log(students.age);
console.log(students.course);
console.log(students.school);

console.log('The outcome below is using s "a for-in loop" to access the keys of an  object');

for(const key in students){
  console.log(students[key]);
}

// for-of loop
const stdAge = [10,20,13,24];

console.log('Using a for-of loop to output ements of an array')
for(let idx of stdAge){
  console.log(idx);
}

//personal slogan

// let Name = "Mike";
// let aboutMe = {};

// if (Name === "Mike") {
//   aboutMe.interest = "Coding";
//   aboutMe.specialization = "web and mobile development";
// } else {
//   console.log("I am sorry, I am not the one");
// }





// var $Name = "Mike";
// // var k = 0;
// do{
// console.log("Code! Code! Code! everyday");
// console.log("Practice! Practice! Practice! everyday");
// console.log("Consistency and continuous improvement is the secret");
// console.log("The best way to become; is to do");
// console.log("Refine your skillset and learn something new everyday")
// // k++;
// } while(true);



// const myInterest = [];
// const everyDay = 'coding';
// var i = 0;
// const action = `Practice everyday, improve everyday,
//  and apply what you learn to solve real- world problems`;

// while(everyDay === 'coding' && i<=10){
//   myInterest.push(action);
//   i++;
// }
// console.log(myInterest);
// console.log("The name is still Michael");

// while(true){
//   console.log('How are you doing?');
// }

