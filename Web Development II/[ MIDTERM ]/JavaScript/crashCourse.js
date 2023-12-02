// Printing a text
console.log("Shalom");


// declaring variable
let name = "Francis"; // changeable
const age = 19; // const does not change

// creating functions
// function foot()

// const bar = () -> {} // a variable eassigned with anonymous function

function add(x, y) {
    return x + y;
};

const minus = (a, b) => {
    return a + b
};

let sum = add(1,2);
const diff = minus(10, 9);

console.log(sum);
console.log(diff);

let list1 = [1,2,3,4,5,6];
list1.forEach((val) => {
    console.log(val)
})

const display = (val) => {
    console.log(val);
}

for(let i = 0; i < list1.length; i++) {
    display(list1[i]);
}

// list1. push(7) // adds at the top of the stack; the first one to get removed
// list1. pop()