const prompt = require("prompt-sync")({ sigint: true });

let size = parseInt(prompt("Enter that how many number do you want to give :- " ));

let num = [];
console.log("---------------------------------------------------------------");
for (let i = 0; i < size; i++) {
    num[i] = prompt("Enter " + i + " indexed number :- ");
}

let ansNum = [];

for (let j = 0; j < size; j++) {
    if (num[j] % 3 == 0 && num[j] % 2 != 0) {
        ansNum[j] = num[j];
    }
}

console.log("\n Number which are divisible by 3 and not divisible by 2 are ", ansNum);
