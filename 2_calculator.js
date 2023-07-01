const prompt = require("prompt-sync")({ sigint: true });

console.log("--------------------------------------------------------")
console.log("----------- Enter 0 for Closing the Program ------------")
console.log("--------------------------------------------------------")

let num1 = parseFloat(prompt("Enter First Number :- "));

let num2 = parseFloat(prompt("Enter Second Number :- "));

for (let i = 1; i > 0; i++) {
  let op = prompt(" Enter an Operator ( +, - , * , / ) :- ");
  if ( op == '0') {
    break
  }

  switch (op) {
    case '+':
      console.log(num1, "+", num2, "=", num1 + num2);
      break;
    case '-':
      console.log(num1, "-", num2, "=", num1 - num2);
      break;
    case '*':
      console.log(num1, "x", num2, "=", num1 * num2);
      break;
    case '/':
      console.log(num1, "/", num2, "=", num1 / num2);
      break;
    default:
      console.log("Invalid Operator !!");
      break;
  }
}

console.log("\n")
console.log(" ------------ Program Closed !! ------------ ")
console.log("\n")