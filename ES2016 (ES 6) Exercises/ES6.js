/**
 * Created by Dino on 10/24/2016.
 */

"use strict"; // allows let..

console.log("Opgave EX1");
console.log("");
const PI = 3.141593

var a = PI > 3.0

console.log("Is PI Higher than a? - " + a);

// Support for constants (also known as "immutable variables"), i.e., variables which cannot
// be re-assigned new content. Notice: this only makes the variable itself immutable,
// not its assigned content (for instance, in case the content is an object, this means the
// object itself can still be altered).


console.log("");
console.log("////////////////////////////////");
console.log("Opgave EX2");
console.log("");

var evens = [2, 4, 6];



var odds = evens.map(function(x){ return x+1 });
var odds2 = evens.map(x => x+1 );

console.log("Odds with function " + odds)
console.log("Odds with Arrow Function " + odds2)
console.log("The reason the arrow function works is because its saying the exact same as my Odds with function (its just a shortcut to using a function)")
console.log("So basically x => x+1 is the same as function(x) {return x+1}")


console.log("");
console.log("////////////////////////////////");
console.log("Opgave EX3");
console.log("A) arrow functions and this");



const fives = []; // arrayet skal aldrig laves om
const fivesArrow = []; // arrayet skal aldrig laves om

function Numbers(numbs) {
    this.nums = numbs;
    this.nums.forEach(function (v) {
        if (v % 5 === 0) {
             fives.push(v);
        }
    });
    return fives;
}



///
function NumbersArrow(numbs) {
    this.nums = numbs;

    this.nums.forEach(v => {
        if (v % 5 === 0) {
            fivesArrow.push(v);
        }
    });
    return fivesArrow;

}

var numbers = new Numbers([1,3,5,10,14,20,33,50]);
var numbersArrow = new NumbersArrow([1,3,5,10,14,20,33,50]);
console.log("Sorted numbers using ES5 -- " + numbers + " ------- Sorted Numbers using Arrow Function -- " + numbersArrow + "")


console.log("")
console.log("")
console.log("Opgave EX3")
console.log("B)  Arrow functions and this or when not to use arrow functions")

// This example (taken from the slide referred to above), shows how we "loose" this, when extracting a method
// from an object.
var counter = {
    count: 0,
    inc: b => {
        this.count;
    }
}
var func = counter.inc; //Store "reference" to inc
func();
console.log(counter.count); //Still zero
counter.inc();
console.log(counter.count); //Now one

console.log("")
console.log("Arrow function allowed us to use this for ")
// Rewrite the inc() function to use the arrow notation, and test whether this solves the problem, makes it
// worse or leaves it unchanged.

console.log("")
console.log("")
console.log("Opgave 4 use the below from now on")
var customer = { name: "Foo" }
var card = { amount: 7, product: "Bar", unitprice: 42 }
var message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`
console.log(message);
console.log("")
console.log("${} allows to escape inside a variable string so we dont have to use for example 'hello' + customer.name + '' and so on.")
console.log("")
console.log("")
console.log("Opgave 5 - Rest Parameter and the spread operator")
console.log("A) Implement the function f(..) ")

function f(a,b,c,d,e,f,g,h) {


    let message2 = `Sum ${a+b},
rest value 1 is a: ${c.constructor.name}
rest value 1 is a: ${d.constructor.name}
rest value 1 is a: ${e.constructor.name}
rest value 1 is a: ${f.constructor.name}
rest value 1 is a: ${g.constructor.name}
rest value 1 is a: ${h.constructor.name}
`

    return message2;

}

console.log("")
console.log("")
console.log("Opgave 5")
console.log("B)  Test the rest operator using the code below")


// var rest = [true,2,"hello World",[1,2,3],new Date(),{}];
// var restParams = [...rest];
// console.log(f(5,2,...restParams));
//
// console.log("Opgave 5" +
//     ".C = will produce a new line after each character")
// var chars = [... f(5,2,...restParams)];
// console.log(chars)


console.log("")
console.log("")
console.log("Opgave 6")
console.log("Assuming we had these variables (for example passed in via a HTTP request):")

// the way shorthand helps us is that we do not have to type Etc firstname : name it will take the parameter and use that as index so minimum code req.
function SH(name, lastname, age) {
    return { type: 'Sexy', name, lastname, age };
}

var data =  {fName : "kurt", lName : "Barsen", age : 98}


var shorthand = SH(data.fName, data.lName, data.age);
console.log(shorthand);

console.log("")
console.log("")
console.log("Opgave 7")
console.log('A) Given these declarations: let fName = "Kurt", lName = "Wonnegut";')


console.log("Ændret orden ved hjælp af Array matching --- virker ikke på min men samme kode virkede for lefort" )
// [fName, lName] = [lName, fName];
// console.log(`First: ${fName}, Last: ${lName}`);

console.log("")
console.log("")
console.log("Opgave 7")
console.log("B) Given the method below")

function getPerson(lastname, phone){
    return {
        firstName: "Kurt",
        lastname,
        gender : "Male",
        email: "kurt@wonnegut.dk",
        phone,
    }
}

console.log(getPerson("Wonnegut", 12345))


console.log("")
console.log("")
console.log("Opgave 8  ES2015 Modules")
console.log("B) Rewrite the f(..) method from EX5 into a reusable es2015 module, and import the function into a new fileand test.")


function _f2(a,b,c,d,e,f,g,h) {


    let message2 = `Sum ${a+b},
rest value 1 is a: ${c.constructor.name}
rest value 1 is a: ${d.constructor.name}
rest value 1 is a: ${e.constructor.name}
rest value 1 is a: ${f.constructor.name}
rest value 1 is a: ${g.constructor.name}
rest value 1 is a: ${h.constructor.name}
`

    return message2;

}




console.log("")
console.log("")
console.log("Opgave 9  Classes and Inheritance with es2015")
console.log("A) The declaration below defines a Shape class, whicha as it's only properties has a color field + a " +
    "getArea() and a getPerimeter() function which both returns undefined. This is the closest we get to" +
    "an abstract method in Java.")
console.log("")

class Shape {
    constructor(color){
        this._color = color;
        this._perim = "";
        this._area = "";
    }
    getColor() {
        return this._color;
    }
    setColor(color) {
        let oldcolor = this._color;
        this._color = color;
        return oldcolor;
    }
    getArea() {

    }
    setArea() {

    }
    getPerimeter() {

    }
    setPerimeter(perim) {

    }
}

var saz = new Shape("red");




let messagez = `Setting new Color... - Old color was -  ${saz.setColor("green")},
New color is - : ${saz.getColor()}
`
console.log(messagez);


console.log("Opgave 9")
console.log("B) Create a new class Circle that should extend the Shape class")
console.log("")

class Circle extends Shape {
    constructor(color, radius) {
        super(color, radius);
        this.setColor(color);
        this._Radius = radius;
        this._perim;
        this._area;
    }


    setRadius(radius) {
        this._Radius  = radius;
        return this._Radius;
    }


    getRadius() {
        return this._Radius;
    }


    getPerimeter() {
        return this._perim;
    }


    setPerimeter(perim) {
        this._perim = perim;
        return perim;
    }

    getArea() {
        return this._area;
    }
    setArea(area) {
        this._area = area;
    }


}

console.log("")
console.log("")

var cirkel = new Circle("green", 50);

console.log("get Color returns -- " + cirkel.getColor())
console.log("")
cirkel.setColor("Yellow"); console.log("Setting Color to Yellow");
console.log("")
console.log("get Color returns -- " + cirkel.getColor())

console.log("")
console.log("")

console.log("get Radius returns -- " + cirkel.getArea())
console.log("")
cirkel.setArea(100); console.log("Setting area to 100");
console.log("")
console.log("get Radius returns -- " + cirkel.getArea())

console.log("")
console.log("")

console.log("get Radius returns -- " + cirkel.getRadius())
console.log("")
cirkel.setRadius(100); console.log("Setting Radius to 100");
console.log("")
console.log("get Radius returns -- " + cirkel.getRadius())

console.log("")
console.log("")

console.log("Get Perimeter returns -- " + cirkel.getPerimeter())
console.log("")
cirkel.setPerimeter(1002); console.log("Setting Perimeter to 1002");
console.log("")
console.log("Get Perimeter returns -- " + cirkel.getPerimeter())
console.log("")
console.log("")
console.log("Opgave 9")
console.log("C) Create a new class Cylinder (agreed, not a perfect inheritance example) that should extend the Circle class.")
console.log("")

class Cylinder extends Circle{
    constructor(color, radius, height) {
        super(color, radius);
        this.setColor(color)
        this._Radius = radius;
        this._Height = height;
        this._perim;
        this._area;
    }


    setRadius(radius) {
        this._Radius  = radius;
        return this._Radius;
    }

    get Radius() {
        return this._Radius;
    }

    getHeight() {
    return this._Height;
    }
    setHeight(height) {
        this._Height = height;
    }
    getVolume() {
     return this._Radius * 2 * this._Height;
    }
    getPerimeter() {
        return undefined;
    }



}


console.log("")

var cyl = new Cylinder("green", 50, 20)


console.log("")
console.log("Volume with a Cylinder with " + cyl.getRadius() + " radius and " + cyl.getHeight() + " -- " + cyl.getVolume())
console.log("")
console.log("Setting Height of Cylinder to 10 -- " + cyl.setHeight(10))
console.log("")
console.log("Volume with a Cylinder with " + cyl.getRadius() + " radius and " + cyl.getHeight() + "Height -- " + cyl.getVolume())
console.log("")
console.log("Setting Area of Cylinder to 20 -- " + cyl.setRadius(20))
console.log("")
console.log("Volume with a Cylinder with " + cyl.getRadius() + " radius and " + cyl.getHeight() + " Height -- " + cyl.getVolume())
console.log("")
console.log("")


console.log("Opgave 9")
console.log("D) The getX() methods (getArea(), getPerimeter() and getVolume()) are all candidates for a getter.")
console.log("Rewrite the three methods to use the getter syntax; that is console.log(circle.radius) instead of console.log(circle.getRadius())")
console.log("")
console.log("radius is: " + cyl.Radius)
console.log("")
console.log("")
console.log("Opgave 10")
console.log("Skim the sections (https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Iteration_protocols#iterator)" +
    "related to Iteration Protocols and implement (and understand) the two examples from the slides:")
console.log("")
console.log("Example 1) Example implementing the iterator protocol")
console.log("")

function makeIterator(array) {
    var nextIndex = 0;

    return {
        next: function () {
            return nextIndex < array.length ?
            {value: array[nextIndex++], done: false} :
            {done: true};
        }
    }
}
//Here we can do:
let it = makeIterator(['yo', 'ya']);
console.log(it.next().value); // 'yo'
console.log(it.next().value); // 'ya'
console.log(it.next().done);  // true




console.log("")
console.log("")
console.log("Example 2) Example implementing the iterable (and thereby also the iterator) protocol ")
console.log("")
console.log("")
function makeIterator2(array) {
    var itt= {};
    itt[Symbol.iterator] = function() {
        var nextIndex = 0;
        return {
            next: function () {
                return nextIndex < array.length ?
                {value: array[nextIndex++], done: false} :
                {done: true};
            }
        }
    }
    return itt;
}
//Here we can iterate using the for-of syntax:
var it2 = makeIterator2(['yo', 'ya']);
for(let i of it2){
    console.log(i);
}


console.log("")
console.log("")
console.log("Opgave 11) EX11 Generators")
console.log("A) har ikke implementeret dem og testet dem, men forstår hvordan det virker.")
console.log("")
console.log("")
console.log("Opgave 11)")
console.log("B) Complete the Generator function below (it's not yet a generator function, what is missing) ")




function* makeNames() {

    var firstNames = ["Lars", "Jan", "Ida", "Tine","Thomas"];
    var lastNames = ["Mortensen","Peterson","Obama","Jensen","Hansen"];

    while(true)
    {
        let fnl = Math.floor(Math.random() * firstNames.length);
        let lnl = Math.floor(Math.random() * firstNames.length);
        let Person = {firstName : firstNames[fnl], lastName : lastNames [lnl]}
        yield Person;
    }
}

let index = 0;
for(let name of makeNames()){
    console.log(name);
    if(index++ === 50){
        index--;
        console.log(index);
        break;
    }
}


// module.exports = {f2 : _f2}; // Export Module