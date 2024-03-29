/*
Name: Aline Vetrov
Title: concat ex 2
Date: 14/01.2020
*/

let firstName = "Aline";
let lastName = "Vetrov";
let age = 30;
let bornCity = "Raccun";
let currCity = "Moncton";
let isMerried = false;
let firstJob = "Dish Washer";
let hourlyRate = 125;

let text = "Hello, " + firstName + " " + lastName + ". You are " + age + " years old and were born in " + bornCity + ", and currently live in " + currCity + ".\n"
+ "Your first job was at " + firstJob + " making " + hourlyRate + "/hour.\n"
+ "I asked if you were married and you said " + isMerried + "."

text = `Hello, ${firstName} ${lastName}. You are ${age} years old and were born in ${bornCity}, and currently live in ${currCity}.\n`
+ `Your first job was at ${firstJob} making ${hourlyRate.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}/hour.\n`
+ `I asked if you were married and you said ${isMerried}.`

console.log(text);
