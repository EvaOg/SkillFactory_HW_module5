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

let arr = [0,0];
let oddN = 0;
let evenN = 0;
let nullN = 0;
    

for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 != 0) {
      oddN = oddN + 1;
    }
  
   else if(arr[i] % 2 === 0 && arr[i] !== 0) {
      evenN = evenN + 1;
    }
  
    else if (arr[i] === 0) {
    nullN = nullN + 1;
  }
}

console.log("Odd Numbers in array: " + oddN);
console.log("Even Numbers in array: " + evenN);
console.log(`There are ${nullN} nulls in array`);


// Задание №8

let dataUsers = new Map ([
  ["Igor", "Team 2"],
  ["Niko", "Team 1"],
  ["Eva", "Team 3"],
]);

for (let usersName of dataUsers.values()) {
  console.log(usersName);
};

for (let usersTeam of dataUsers.keys()) {
  console.log(usersTeam);
};
