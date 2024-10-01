let age : number = 18; 
let canDrive: boolean;

// if else 
if (age >= 18){
    canDrive = true;
} else {
    canDrive = false;
}
// hier einmal mit Ternery
let age2: number = 18; 
let canDrive2: boolean = age2 >=18 ? true: false;

// Grundsyntax Ternery
// bedingung ? wenn true: wenn false; 

let age3: number = 12; 
let welcomeOrNot : string = age3 >= 18 ? "Willkommen im Club" : "Geh nach Hause Kiddo";
console.log(welcomeOrNot);

// kleine Sachen, einzelne Werte zurückgeben 
// eine weitere Möglichkeit zu Switch und If/Else

