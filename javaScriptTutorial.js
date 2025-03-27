 
//  console.log(Object)
//  //creating sn object constructor
//  function Pers(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;
// }
//creating an object with the constructor
// const myPerson = new Pers("Mike", "Testimony", 27, "Black");
// console.log(myPerson.nationality); // accessing a property added to the prototype of yhe constructor after this object was created
// document.getElementById("demo").innerHTML = "My name is "
// +myPerson.firstName+" and I am "+myPerson.age+" years old."
//adding property to a constructor

// Pers.prototype.nationality = "Ghana"; //can't add property directly

// //add t\property to the the contructor prototype

// document.getElementById("demo").innerHTML = "My name is "
// +myPerson.lastName+" and I am "+myPerson.age+" years old. "+ "I am from "+myPerson.nationality;

//fucntions

function tempDegree(Fahrenheit){
  // console.log("Enter the tempeture in Fahrenheit: ");
  Temperature = Math.round(5/9*(Fahrenheit-32));
  console.log(Fahrenheit+ " in Fahrenheit is equivalent to: "+Temperature+" Degrees");

}
//calling the function

tempDegree(40);

//wraping a function with a try and catch block;
function tempFahreiheit(Degree){
try{
  if(typeof Degree !=='number'){
    throw new Error('Enter only numbers');
  }else{
    // console.log("Enter the tempeture in Fahrenheit: ");
    Temperature = Math.round(9/5*(Degree)+32);
    console.log(Degree+ " in Degree is equivalent to: "+Temperature+" Fahrenheit");
  
  }
}catch(error){
  console.error('Ooops, an error occured: ',error.message);
}
}

tempFahreiheit(4.444);

// javascript classes

class Animal{
  constructor(name, color, age, gender){
    this.name = name;
    this.color = color;
    this.age = age;
    this.gender = gender;
  }
   callAnimal() {
    console.log("Hello! "+this.name+" How are you?")
    
  }

  Food(){
    console.log(this.name + " Here is your food")
  }

  gen(){
    console.log("My Pet "+ this.name +"is "+ this.age+" years old")
  }

}

// creating objects of the animal class

const myPet1 = new Animal("Kish", "Blue", 2, "Male");
const myPet2 = new Animal("Lily", "Black", 2, "Female");
const myPet3= new Animal("Glory", "Brown", 2, "Male");
Animal.prototype.breed = "Bary pet";


// accessing class properties through the objects of the class

console.log(myPet2.callAnimal())
console.log(myPet1.Food())
console.log(myPet3.gen())
console.log(myPet3.breed)

//adding new properties to the prototype object

Animal.prototype.breed = "Bary pet";
 
// creating a subclass to inherit from the animal class

class myCat extends Animal{
constructor(name,color,age, state){
super(name,color,age)
this.health = state;
console.log("Hi, "+this.name+ " My cat is "+this.health)
}
}

const mycat = new myCat("Gigi","Red",3,"Healthy","male");

console.log(mycat.Food())

//polymorphism
class Shape{

  area(){
 console.log("Calculationg the area ")
  };
}
//square
class square extends Shape{
 area(sideLen){
  const Area = sideLen*sideLen;
  console.log(Area+"cm square");
 };
}

//trectangle
class Rect extends Shape{
  area(len,bred){
   const Area = len*bred;
   console.log(Area+"cm square");
  }
}

//circle

class circle extends Shape{
  area(radius){
   const Area =Math.round(Math.PI*radius);
   console.log(Area+"cm square");
  }
}

const squareArea = new square();
const rectArea = new Rect();
const circleArea = new circle();

//square
console.log("Areas of square");
squareArea.area(5);

//rectangle
console.log("Areas of  rectangle");
rectArea.area(5,10);

//circle

console.log("Areas of circle");
circleArea.area(5);




// Encapsulation in js

class BankAccount {
  #balance; // Private field

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    this.#balance += amount;
    console.log("Deposited $" + amount + ". New balance: $" + this.#balance);
  }
  withdraw(amount) {
    if (this.#balance >= amount) {
      this.#balance -= amount;
      console.log("Withdrew $" + amount + ". New balance: $" + this.#balance);
    } else {
      console.log("Insufficient funds.");
    }
  }
}

const account = new BankAccount(1000);

//depositing into my account
account.deposit(2000);
account.withdraw(9000)


//Abstraction

class AbstractPaymentGateway {
  processPayment(amount) {
    throw new Error("Method must be implemented by subclass.");
  }
}

class PayPalPaymentGateway extends AbstractPaymentGateway {
  processPayment(amount) {
    console.log("Processing PayPal payment of $" + amount);
  }
}
class StripePaymentGateway extends AbstractPaymentGateway {
  processPayment(amount) {
    console.log("Processing Stripe payment of $" + amount);
  }
}

const paypalGateway = new PayPalPaymentGateway();
const stripeGateway = new StripePaymentGateway();

console.log("Paypal payment processing");

paypalGateway.processPayment(100); 



