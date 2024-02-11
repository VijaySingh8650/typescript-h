let n:number = 1;
// n = "sdjkshfk";

function greet(input:string){
    console.log(input);
}

greet("Hello");

//type inference 
function sum(a:number, b:number){
    return a+b;
}

sum(1, 2);

function ageFun(age:number):boolean{
    return age > 18 ;
}

ageFun(12);

//call signature
function runAfter(fun:(num:number)=>number){
    setTimeout(fun, 1000);
}

const  fun = (num: number):number =>{
   return num;
}

runAfter(fun);


//Interfaces
//Interface can only be used to implement classes not types
//Interface can only be used for object data type

interface UserI {
    age: number;
}

function isLegal(user:UserT):boolean{
    return user.age > 18;
}

//Types

type UserT = {
    age: number;
    id: number | string; //union, any of them
}


// Array
let num:number[] = [1,2, 3,5,34,32,12,34,56,67,54,76,34,22];


//enums - Enumeration
//Easier readability, Reusable if imported everywhere (Status code in express)

type keyInput = "Up" | "Down" | "Right" | "Left";

//more readable

//Default value
// enum Direction {
//     Up, //0
//     Down, //1
//     Left, //2
//     Right //3
// }

//Explicitly defined
enum Direction {
    Up = "Up", //0
    Down = "Down", //1
    Left = "Left", //2
    Right = "Right" //3
}

//explicitly defined
// enum Direction {
//     Up=1, //1
//     Down, //2
//     Left, //3
//     Right //4
// }

function doSomething(keyPress:Direction){
    
}

doSomething(Direction.Up);
doSomething(Direction.Down);
doSomething(Direction.Right);
doSomething(Direction.Left);
console.log(Direction.Up) // 0


//Generics - It enables us to create components that work with any data types
type Input = number | string;

// function firstEl<T>(arr: T[]):T{
//    return arr[0];
// }

const firstEl = <T>(arr:T[]):T =>{
    return arr[0];
}

const value1 = firstEl<string>(["Vijay", "Singh"]);
value1.toUpperCase();

const value2 = firstEl<number>([1, 2]);



//Importing and exporting
// TS follows ES6 for import & export 



