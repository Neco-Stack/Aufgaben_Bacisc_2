// Math.random generiert eine Zufallszahl 
// Math.floor nennt gerade Zahlen ohne Dezimalstellen, ergo Zahlen ab >1 
// x77 ergibt eine Zufallszahl zwischen 1 (Math.floor) und 77
let x : number = Math.floor(Math.random() * 77);
let y : number = Math.floor(Math.random() *77);


// Deklarierung einer Funktion, die zwei Zufallszahlen genereriert- mit Nachricht je nach Ergebnis in Konsole
function randomLotto(x : number, y : number){
    if (x == y){
        console.log("was für zufall");
    } else if (x > y){
        console.log("Erste Zahl ist größer");
    } else {
        console.log("Zweite Zahl größer");
    }
}
randomLotto(x,y)












