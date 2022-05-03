const readline = require("readline");

const rl = readline.Interface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Do you know what?? ", function(answer) {
    console.log("Youre awesome! If no one told you today!")
    setTimeout(() => {console.log("Keep going...")}, 2000)
    setTimeout(() => {console.log("You're doing great!")}, 4000)
    setTimeout(() => {console.log("Gotta go :)")}, 6000)
    rl.close()
})





