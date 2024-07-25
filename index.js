// Day 1

// var a = 10;
// console.log(a);
// console.log(typeof a);

// let b="Hellooo World";
// console.log(b);
// console.log(typeof b);

// b=20;
// console.log(b);

// const c=true;
// console.log(c);
// console.log(typeof c);
// //c=false;
// //console.log(c);

// function type(par){
//     console.log(par);
//     console.log(typeof par);
// }

// type("Helloo");

// Day 2

// console.log("Day 2");

// function sum(a,b){
//     return a+b;
// }

// console.log(sum(10,5));

// function sub(a,b){
//     return a-b;
// }

// console.log(sub(10,5));

// function mul(a,b){
//     return a*b;
// }

// console.log(mul(10,5));

// function div(a,b){
//     return a/b;
// }

// console.log(div(10,5));

// function mod(a,b){
//     return a%b;
// }

// console.log(mod(10,3));


// let x = 10;
// x+=3;

// console.log(x);

// let x = 10;
// x-=3;

// console.log(x);

// let a = 12;

// let b = 9;

// if ( (a || b) < 10){
//     console.log("true");
// }

// function ter(x){
//    return x>0 ? true : false
// }
// console.log(ter(-19));

// Day 3

// function ter(x){
//    return x>0 || x==0 ? true : false
// }
// console.log(ter(0));

// function eligible(x){
//     return x >= 18 ? true : false
// }
// console.log(eligible(16));

// let num;
// switch(new Date().getDay()){

//     case 0:
//         num = "Sunday"
//         break;
//     case 1:
//         num = "Monday"
//         break;
//     case 2:
//         num="Tuesday";
//         break;
//     case 3:
//         num="Wednesday"
//         break;
//     case 4:
//         num="Thursday"
//         break;
//     case 5:
//         num="Friday"
//         break;
//     case 6:
//         num="Saturday"
//         break;
//     default: 
//         num="Noday"

// }
// console.log(num);

// function leap(x){
//     return x%4 == 0 ? true : false;
// }

// console.log(leap(2023));

// Day 4

// for (let i=1; i<=10; i++){
//     console.log(i);
// }

// let i=1;
// while ( i <= 10){
//     console.log(i);
// i++
// }

// for (let i=1; i<=10; i++){
//     console.log(`${i} * 5 = ${i*5}`)
// }

// for (let i=1; i<=5; i++){
//     for(let j=i+1; j<=5; j++){
//         console.log("*");
//     }

// }

// let i=1;
// let sum = 0;

// while(i<= 10){
//     sum = sum+i;
//     i++;
// }
// console.log(sum);

// let fact = 0
// function factorial(n){
//     for(let i=1; i<=n; i++){
//        fact  = n * n-i;
//     }
//     return fact
// }

// console.log(factorial(4));

//Day 5

// function oddEven(num){
//     return num%2 == 0 ? "Even" : "Odd"
// }

// console.log(oddEven(6))

// function square(num){
//     return num * num
// }
// console.log(square(5))

// const max = function(num1, num2){
//     return Math.max(num1, num2)
// } 
// console.log(max(10,8))

// const concat = function(str1, str2){
//     return str1.concat(str2)
// }

// console.log(concat("Hello ", "World"))

// const sum = (num1, num2) => {
//     return num1+num2
// }

// console.log(sum(2,3))

// const contain = (str, char) => {
//     return str.includes(char)
// }

// console.log(contain("Hello", "i"))

// const product = (num1, num2 = 5) => {
//     return num1 * num2
// }

// console.log(product(2,4))

// const greeting = (name, age = 25) => {
//     return `Hello ${name}, you are ${age} years old!`
// }

// console.log(greeting("Renu"))



// const highfun = (fun, num) => {
//     for(let i=0; i<num; i++){
//         fun();
//     }
// }
// const greet = () =>{
//     console.log( "Helloo Everyone")
// }

// console.log(highfun(greet, 5))


// const highfun = (fun1, fun2, value) => {
//     let firstRes = fun1(value);
//     return fun2(firstRes);
// }
// const square = (x) => x*x;
// const half = (x) => x/2;

// console.log(highfun(square, half, 5))