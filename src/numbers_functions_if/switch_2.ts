let userChoice: string = "papier";
let compChoice: string = "papier";

console.log(userChoice + compChoice);

switch (userChoice + compChoice){
    case    "schereschere":
    case    "steinstein" :
    case    "papierpapier":
        console.log("DRAW");
    break;
    case    "scherepapier":
    case    "papierstein":
    case    "steinschere":
        console.log("USER WINS");
}
console.log("hello");


// ein guter Use Case für Switch ist zB das Spiel Schere, Stein, Papier
// mit if/else wäre es viel länger 