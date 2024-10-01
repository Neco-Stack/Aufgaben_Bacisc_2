// Math.random generiert eine Zufallszahl 
// Math.floor nennt gerade Zahlen ohne Dezimalstellen, ergo Zahlen ab >1 
// x77 ergibt eine Zufallszahl zwischen 1 (Math.floor) und 77
let x : number = Math.floor(Math.random() * 77) + 1;
let y : number = Math.floor(Math.random() *77); + 1
console.log("Num1:" + x);
console.log("Num2:" + y);


// +1 prüfen ob an richtiger Stelle

// Deklarierung einer Funktion, die zwei Zufallszahlen genereriert- mit Nachricht in Konsole, 3 Möglichkeiten mit Conditionals  
function randomLotto(x : number, y : number){
    if (x === y){
        console.log("was für zufall");
    } else if (x > y){
        console.log("Erste Zahl ist größer");
    } else {
        console.log("Zweite Zahl größer");
    }
}
randomLotto(x,y)

// Now lets try it with Switch; 
// immer === für stabileren Code 










