const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question(`Welcome! Please input your password:`, function(answer) {
    if(answer.length >= 10){
        console.log(`Success! You have infiltrated the NSA`)
    } else {
        console.log(`Wow, you fail. It said 10 characters, listen up next time.`)
    }
  });