var readline = require("readline")
var rl = readline.createInterface(process.stdin, process.stdout)
let input1
let itemNames = ["DE4350", "FG6570"]
let schema = ("UUnnnn")

rl.question("input your medical license number: ", (answer) => {
    answer = input1;
})

function inputHandler(){
    if (input1.length === schema.length){
        codecheck(userinput, itemNames)
    }
}

function codecheck (inputed, itemNames){
    for (let i = 0; i <itemNames.length; i++){
        if (inputed === (itemNames[i])){
            console.log("that is a medical product")
        }else{
            console.log("that is inccorect")
        }
    }
}

inputHandler(input1);





