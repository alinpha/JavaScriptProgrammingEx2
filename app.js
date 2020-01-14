let l = "---------------------";

let fName = "Aline";
let lName = "Vetrov";
let age = 30;

console.log(l);
//conctanation
let msgConcat = 'My name is ' + fName + ' ' + lName + ', my age is ' + age;

console.log(msgConcat);
console.log(l);

//string interpolation
let msgStrLit = `My name is ${fName} ${lName}, my age is ${age}`;
console.log(msgStrLit);
console.log(l);

//escaepe and new line
let a = "add a new line\nThis is anther line";
console.log(a);
console.log(l);

let b = "I quoted someone saying \"I love python\"";
console.log(b);
console.log(l);

b = 'I quoted someone saying "I love python 3"';
console.log(b);
console.log(l);

let c = "It's over there";
console.log(c);
console.log(l);

console.log("Sting functions");
let f = "abcdefg";

console.log(`length of var ${f} is ${f.length}`);
console.log(f.toUpperCase());
console.log(f.toLowerCase());
console.log(f.substr(2,4));
console.log(f.substring(3));
console.log(`index of c is ${f.indexOf("c")}`);


