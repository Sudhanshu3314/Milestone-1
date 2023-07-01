const { resume } = require("prompt");

const prompt = require("prompt-sync")({ sigint: true });

console.log("You need to Enter always Red , Yellow , Blue \n");

let color1 = prompt("Enter first Color :- ")
let color2 = prompt("Enter Second Color :- ")

let c1 = color1.toLowerCase()
let c2 = color2.toLowerCase()

let result;

switch (c1) {
    case "red":
        switch (c2) {
            case "blue":
                result = "Purple"
                console.log("Mixture of", color1, "and", color2, "is", result);
                break

            case "yellow":
                result = "Orange"
                console.log("Mixture of", color1, "and", color2, "is", result);
                break
            default:
                console.log("Invalid Colour Combination");
        }
        break

    case "blue":
        switch (c2) {
            case "red":
                result = "Purple"
                console.log("Mixture of", color1, "and", color2, "is", result);
                break

            case "yellow":
                result = "Green"
                console.log("Mixture of", color1, "and", color2, "is", result);
                break
            default:
                console.log("Invalid Colour Combination");
        }
        break

    case "yellow":
        switch (c2) {
            case "red":
                result = "Orange"
                console.log("Mixture of", color1, "and", color2, "is", result);
                break

            case "blue":
                result = "Green"
                console.log("Mixture of", color1, "and", color2, "is", result);
                break
            default:
                console.log("Invalid Colour Combination");
        }
        break
    default:
        console.log("Invalid Colour Combination");
}


