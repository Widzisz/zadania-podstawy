// ZADANIE 1
// let sentence = "Koty to fajne zwierzaki";

// console.log(sentence.split(' ').length);

// ------------------------------------------------------------------------------------------
// ZADANIE 2
// let names = prompt("Your name");

// console.log("Witaj" + " " + names.charAt(0).toUpperCase() + names.slice(1));

// ------------------------------------------------------------------------------------------
// ZADANIE 3 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! jaka technika zrobił by to Marci

// const text= "Ala ma kota";
// let text2 = text.substring(7, 10);

// if (text2 === "kot") {
//     console.log("Zdanie zawiera słowo kot");
// } else {
//     console.log("Zdanie nie zawiera słowa kot");
// }

// ------------------------------------------------------------------------------------------
// ZADANIE 4 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! jak zrobić co druga literke toUpperCase

// const text = "Ala ma kota";

// const text2 = text;
// for (let i = 0; i < text.length; i++) {
//     for (let j = 0; j = i; j++) {
//         if (j == 0) {
//             text2.toUpperCase()
//         }
//     }
//     console.log(text2);
// }


// const text3 = text.replace("Ala", "Witek");

// console.log(text.toLowerCase());
// console.log(text.toUpperCase());
// console.log(text3);



// ------------------------------------------------------------------------------------------
// ZADANIE 5

// let min = 10;
// let max = 100000;

// const numbers = Math.floor(Math.random() * (max - min + 1) + min);

// console.log(numbers.toString().padStart(10, "."));


// ------------------------------------------------------------------------------------------
// ZADANIE 6

const uniqueID = Math.random().toString(36).substr(2, 5);

console.log(uniqueID);



