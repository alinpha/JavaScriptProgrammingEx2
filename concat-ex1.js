/*
Name: Aline Vetrov
Title: concat-ex1
Date: 14/01.2020
*/

console.log("Ex1");

let name = "Fred";

let text = "Web and Mobile Application development was the program " + name + " entered in the Fall of 2019.\n"
+ "Intro to Programming is going to be the course " + name + " likes best. " + name + " is going to study very hard.\n"
+ "Each night " + name + " is going to spend time reviewing all of the course material.\n"
+ name + " will be committed to learning as much as possible about C# in 2019!";

console.log(text); 
console.log("-------------------");

text = `Web and Mobile Application development was the program ${name} entered in the Fall of 2019.\n`
+ `Intro to Programming is going to be the course ${name} likes best. ${name} is going to study very hard.\n`
+ `Each night ${name} is going to spend time reviewing all of the course material.\n`
+ `${name} will be committed to learning as much as possible about C# in 2019!`;

console.log(text); 