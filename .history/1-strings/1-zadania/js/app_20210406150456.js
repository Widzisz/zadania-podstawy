// ZADANIE 1
// let sentence = "Koty to fajne zwierzaki";

// console.log(sentence.split(' ').length);

// ------------------------------------------------------------------------------------------
// ZADANIE 2
// let names = prompt("Your name");

// console.log("Witaj" + " " + names.charAt(0).toUpperCase() + names.slice(1));

// ------------------------------------------------------------------------------------------
// ZADANIE 3

// const text= "Ala ma kota";
// let text2 = text.substring(7, 10);

// if (text2 === "kot") {
//     console.log("Zdanie zawiera słowo kot");
// } else {
//     console.log("Zdanie nie zawiera słowa kot");
// }

// ------------------------------------------------------------------------------------------
// ZADANIE 4

const text = "Ala ma kota";

function textUpper(text) {
    let res = "";
    for (i = 0; i < text.length; i++) {
        res += i % 2 == 0 ? text.charAt(i).toUpperCase() : text.charAt(i);
    }
    return res;
}



console.log(text.toLowerCase());
console.log(text.toUpperCase());
console.log(function textUpper());

