let hajinInfo = {
    name: "hajin",
    age : 18,
    gender : "Female",
    isPretty : true,
    favMovies : [
        "Twilight",
        "Harry Potter"
    ],
    favFood : [
        "Maratang",
        "Galbi",
        "Tteokbokki"
    ],
    favArtist : [
        {
            name : "baekhyun",
            age: 30,
            job : "singer"
        },
        {
            name: "teo",
            age : 40,
            job : "actor"
        }
    ]
}

console.log(hajinInfo.favArtist[1].name);


function sayHello(name, age) {
    console.log(`Hello ${name} you are ${age} years old`);
}

sayHello("Hajin", 18);

const calculator = {
    plus : function(a,b) {
        return a + b;
    },
    minus : function(a, b) {
        return a - b;
    },
    multiply : function(a, b) {
        return a * b;
    },
    divide : function(a, b) {
        return a / b;
    },
    power : function(a, b) {
        return a ** b;
    }
};

const plus = calculator.plus(5, 5);
const minus = calculator.minus(5, 5);
const multiply = calculator.multiply(5, 5);
const divide = calculator.divide(5, 5);
const power = calculator.power(5, 5);
console.log(plus);
console.log(minus);
console.log(multiply);
console.log(divide);
console.log(power);

const title = document.querySelector("#title");
title.innerHTML = "Hi! from JS";
title.style.color = 'red';
document.title = "I owe you";


function handleResize() {
    console.log("I have been resized");
}

function handleCilck() {
    title.style.color = "white";
}

window.addEventListener("resize", handleResize);
title.addEventListener("click", handleCilck)

