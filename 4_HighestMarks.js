const prompt = require("prompt-sync")({ sigint: true });

let students = 5;
let marks = [ ] ;
console.log("-----------------------------------------------------------------------------")

for( let i = 0 ;i < students ; i++ ){
    marks[i] = parseInt(prompt("Enter marks of Roll Number " + (i + 1) + " student :- "))
}

let maxMarks = marks[0] ;

for( let i = 1 ; i < students ; i++ ){
    maxMarks = ((maxMarks > marks[i]) ? maxMarks : marks[i] );
}

console.log("\n Student got Highest Marks i.e.", maxMarks ) ;

