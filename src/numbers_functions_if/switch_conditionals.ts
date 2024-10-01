let time : number = 12;
switch (time){
    case 6:
    case 7:
    case 8:
    case 9:
        console.log("es ist morgens");
        break;
    case 10:
    case 11:
    case 12:
    case 13:
        console.log("Es ist Mittags");
        break;
    case 14:
    case 15:
    case 16:
    case 17:
        console.log("Es ist Nachmittags");
        break;   
        // same es else 
    default: 
    console.log("Gib mir Bitte ne Zeit von 6-17 Uhr an");
}

// wenn ich kein brake habe rast er durch und macht alle console logs. 
// cons x : number = Math.floor(Math.random() * 77) + 1;
// let y : number = Math.floor(Math.random() *77); + 1
// console.log("Num1:" + x);
// console.log("Num2:" + y);


// +1 prüfen ob an richtiger Stelle

// Deklarierung einer Funktion, die zwei Zufallszahlen genereriert- mit Nachricht in Konsole, 3 Möglichkeiten mit Conditionals  
// function randomLotto(x : number, y : number){
//     if (x === y){
//         console.log("was für zufall");
//     } else if (x > y){
//         console.log("Erste Zahl ist größer");
//     } else {
//         console.log("Zweite Zahl größer");
//     }
// }
// randomLotto(x,y)

// switch(true){
//     case x === y :
//         console.log("was ein Zufall");
//         break;
//     case x > y:
//         console.log("eins ist größer");
//         break;
//     case y > x:
//         console.log("zwei ist größer");
        
        
        
// }