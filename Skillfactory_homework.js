//Задание №1
let a = prompt("Введите число"); 

console.log(typeof a);

if (a % 2 === 0) {
    console.log("Число чётное")
  } 
else if (isNaN(a)) {
    console.log("Упс, кажется, вы ошиблись")
}
  else {
    console.log("Число нечётное")
}


// Задание №2

let x = 56;

if (Number.isInteger(x)) {
  console.log("x - is an integer")
} else if (typeof x === 'string') {
  console.log("x - is a string")
} else {
  consile.log("x is something else")
}


// Задание №3

let word = "Hello"
word = word.split('').reverse().join("");

console.log(word); 


// Задание №4

let getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }
  
  console.log(getRandomInt(100));

// Задание №5

let arr = [1, 2, 3];
console.log(arr.length);
arr.forEach(el => console.log(el))


// Задание №6

let arr = [1, 2, 1, 1]
let result = true
for (let i = 0; i < arr.length - 1; i++) {
    if(arr[i] !== arr[i + 1]) {
        result = false;
        break;
    }
}
console.log(result)


// Задание №7

let arr = [1, 3, 4, 2, 7, 9, 0, 0]
let oddArr = [] 
let evenArr = []
let zerroArr = []
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'number' && arr[i] > 0) {
        if (arr[i] % 2 == 0) {
            evenArr.push(arr[i])
        } 
        if (arr[i] % 2 != 0) {
            oddArr.push(arr[i])
        }
    }
        if (arr[i] == 0) {
            zerroArr.push(arr[i])
    }
}

console.log(evenArr.length)
console.log(oddArr.length)
console.log(zerroArr.length)


// Задание №8


let map = new Map();

map.set("number", "string");    
map.set(2, "number");     
map.set(false, "boolean"); 
map.set("undefined", "undefined");


for(let [key, value] of map) {
    console.log(`Key is: ${key}, value is: ${value}`)
}
