// let sentence = "Koty to fajne zwierzaki";

// console.log(sentence.split(' ').length);


let names = prompt("Your name");

   if (names) {
    alert("Witaj " + names);
   }

console.log("Witaj" + "" + names.charAt(0).toUpperCase() + names.slice(1));