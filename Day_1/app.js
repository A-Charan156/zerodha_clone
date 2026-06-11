// Javascript does not have the settimeout,fetch method instead js's
// runtime (node.js) is providing that method so it gets stored
// in the webapi section and the console.log() methods get stored
// in the call stack.

// console.log("js")
// "use strict"
// let const
// a = 10
// console.log(a)

// login validator
// age >=18, email contains @, weakpassword=12345 or not,
// password length>=8

// let age = 20
// let email = "hi@gmail.com"
// let password = "password123"

// if (age >= 18 && email.includes("@") && password != 12345 && password.length >= 8) {
//     console.log("valid user")
// }
// else {
//     console.log("invalid user")
// }

// array methods:push pop shift unshift map filter reduce find sort slice
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let number = numbers.filter(n => n % 2 !== 0)
// console.log(number)
// let number1 = numbers.map(n => n * 2)
// console.log(number1)

// write a function to calculate full delivery time
// cooking time - 10min
// distance - 1km - 2min
// packing - 5min
// traffic - 15min
// const processdelivery = (distancetime, traffictime) => {
//     let packingtime = 5
//     let cookingtime = 10
//     let traftime
//     if (traffictime === true)
//         traftime = 15
//     else
//         traftime = 5
//     let totaltime = cookingtime + distancetime + packingtime + traftime
//     console.log("Deliver in: " + totaltime + "minutes")
// }

// processdelivery(10, true) //10 is distance time,true is status of traffic

// Callback functions
// function success() {
//     console.log("payment is succesfull 5000 is debited")
// }
// function failure() {
//     console.log("payment is failed")
// }
// //razorpay         //inversion of control
// function proccespayment(amount, onsuccess, onfailure) {
//     setTimeout(() => {

//         let paymentstatus = true  //simulating the payment
//         if (paymentstatus) {
//             onsuccess();
//             onsuccess();
//             onsuccess();
//         }
//         else {
//             onfailure();
//         }

//     }, 2000)
// }
// //amazon developers
// proccespayment(1000, success, failure);


//promise code snippet
// function proccespayment(amount) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let paymentstatus = true
//             paymentstatus ? resolve("success") : reject("failure")
//         }, 2000)
//     })
// }

// p = proccespayment(2000).then((msg) => {
//     console.log(msg)
// })
// console.log(p)

let fact = fetch("https://meowfacts.herokuapp.com/")
    .then((response) => response.json()).then((data) => console.log(data))
    .catch((error) => console.log(error));
return fact