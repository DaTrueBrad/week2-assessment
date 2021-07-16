// const readline = require("readline");

// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// reader.question(`Welcome! Please input your password:`, function(answer) {
//     if(answer.length >= 10){
//         console.log()
//     } else {
//         console.log(`Wow, you fail. It said 10 characters, listen up next time.`)
//     }
//   });

const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question(`Welcome! Please input your password. It must contain one of each of the following:
Between 10 & 20 characters long
Uppercase
Lowercase
Number
Symbol `, function(answer) {
  // Below is a regular expression that I read about on MDN. From my understanding it sets parameters for a variable and uses shorthand to list out entire lowercase/uppercase aplhabets, numbers, and symbols. Using a .match I can then check to see if my answer contains at least one of each of those, and is between 10 and 20 characters long.
  let passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,20}$/;
    if(answer.match(passw)){
        console.log(` 
        __      __.__                  
       /  \\    /  \\  |__   _________   
       \\   \\/\\/   /  |  \\ /  _ \\__  \\  
        \\        /|   Y  (  <_> ) __ \\_
         \\__/\\  / |___|  /\\____(____  /
              \\/       \\/           \\/ `)
    } else {
        console.log(`Wow, you fail. It said 10 characters, listen up next time.`)
    }
  });