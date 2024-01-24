//This are normal functions

/*function test(num1,num2){
    return num1 + num2;
}
let sum = test(10,30);
console.log(sum);

function sasi(){
    console.log("hello world");
}
sasi();

//This are Arrow functions

const test = () => console.log('Hello');
test();

const sasi = (num1,num2) => num1 + num2;
let sum = sasi(30,40);
console.log(sum);
//single argument value using that time not using any curly braces
const ram = number => number+50
let addition = ram(10);
console.log(addition);

// class 
class sasii{
    constructor(){
        console.log("I'M from constructor");
    }
}
new sasii();

//first create the class object then calls the constructor
//way of creating constroctor is new test();

class bar{
    constructor(num1,num2){
        this.num1 = num1;
        this.num2 = num2;
    }
    addition(){
        console.log(this.num1+this.num2);
    }
}
let ref = new bar(10,20);
ref.addition();

// The Asynk--Await syntex in ES6 use to handle the http promises requests.

async()=>{
    const response = await axios.get('https://www.google.co.in/');
    console.log(response.data);
}

//Destructuring(un packing)
const person = {
    name : "sasi",
    age : 25,
    mail : "sasi@gmail.com",
}
const {name, age, mail} = person;
console.log(age);*/
const example = {
    name : "sasi",
    id : 123,
    mail : "sasi@gmail.com",
}
const {name,id,mail} = example;
console.log(name);
console.log(id);