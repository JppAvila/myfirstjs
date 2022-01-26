//alert("Hola")
/*
var table = "Normal Table";
let chair = "One chair";

console.log(table);
console.log(chair);

let testBoolen = true;
console.log(testBoolen);

table = true;

console.log(table);

var uno = "hola";
var dos = "2";

var resultado = uno - dos;

console.log(resultado);

let testString = 'text';
console.log(testString);

let testBoolenObject = new Boolean(true);

console.log(testBoolenObject);

let testNumberObjetc = new Number(10);

console.log(testNumberObjetc);

//let nameOf = "Jhon";
//let surname = "Doe";
//let question = "How are you " + nameOf + " " + surname + "?";
//console.log(question);


//let nameOf = "Jhon";
//let surname = "Doe";
//let age = 23;
//let question = `How old is ${nameOf}${surname}`;
//let answer = "He is " + age + "years old";
//console.log(question);
//console.log(answer);


//let nameOf = "Jhon";
//let surname = "Doe";
//let question ="How are you".concat(nameOf)+" "+;

//console.log(question);


let operator_a = 12;
let operator_b = 6;
let sum = operator_a + operator_b;
let rest = operator_a - operator_b;
let mult = operator_a * operator_b;
let div = operator_a / operator_b;

console.log(sum);
console.log(rest);
console.log(mult);
console.log(div);

let operator_aa = 3;
let operator_bB = 3;
let expo = operator_aa ** operator_bB;
let incr = operator_aa++;
let decr = operator_aa--;

console.log(expo);
console.log(incr);
console.log(decr);*/

let x = 5;
let y = 6;

console.log(x += 5);
console.log(x -= 5);
console.log(x *= 3);

let testBoolean = true;
let testNumber = 12;
let testString = "Hello";
let testBoolenObject = new Boolean(true);

console.log(typeof(testBoolean));
console.log(typeof(testBoolenObject));

let testNull = null;
console.log(typeof(testNull));

let testUndefined;

console.log(testUndefined);

var first_array = [];
var second_array = new Array(3);
var third_array = new Array(3, 5);
var fourth_array = new Array(3, 6, "Seville", true, third_array);

console.log(fourth_array.length);

console.log(fourth_array.push("Spain"));
console.log(fourth_array);

fourth_array.unshift(1);
console.log(fourth_array);

/*
for (var i = 0; i < fourth_array.length; i++) {

    console.log("Entramos en la interacion de " + fourth_array[i]);
}

for (var i = fourth_array.length; i >= 0; i--) {

    console.log("Second iteration" + fourth_array[i]);
}


var i = fourth_array.length;

for (; i = 0; i--) {

    console.log("Third iteration" + fourth_array[i]);
}*/

fourth_array.forEach(function(element) {

    console.log("fourt iteration " + element);
});