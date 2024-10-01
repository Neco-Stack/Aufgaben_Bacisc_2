// DOM = Document Object Model 
// html -_> document tree 
// head -_> title, meta, link
// body -_> header, main, footer 
// Nodes: Knotenpunkte 
// jedes Element ist ein Objekt mit verschiedenen Eigenschaften 
// weil Sie Eigenschaften haben werden Sie als Objekte bezeichnet 
// über CSS greifst du auf die Eigenschaften und weist Ihnen Werte zu 
// diese Eigenschaften können auch über Typescript verändert werden anstatt CSS 
// um Elemente aus dem HTML ins TS/JS zu bekommen, benötigen wir z.B. den querySelector oder getElementById
// im modernen JS den Query Selector, weil er mehr Power hat als die anderen
// querySelector

const headLine = document.querySelector('#headline') as HTMLElement;
// mit as HTMLElement geht ie Fehlermeldung weg
// dadurch wird bei headline.style als vorschlag genannt 
console.log(headLine);
// falsy values 
if (headLine){
    headLine.style.color = "red";
    headLine.style.backgroundColor = "gold";
    headLine.style.textAlign = "center";
    console.log("Element gefunden");
} else{
    console.log("Element nicht gefunden");
}
// oben Sicherheitsabfrage durch truthy und falsy
// bitte googlen und anschauen 
// wir müssen TS sagen um welches Element es sich handelt, die diesem Fall um ein HTML Element
// JS//TS styled INLINE

// TS und Inputfelder

const inputName = document.querySelector ('#inputName') as HTMLInputElement;

const inputAge = document.querySelector ('#inputAge') as HTMLInputElement;

const showUserBtn = document.querySelector ('showUserBtn') as HTMLInputElement;

if (showUserBtn){
    showUserBtn.addEventListener('click', () => {
        console.log(inputName.value);
        console.log(inputAge.value); 
        headLine.textContent = 'Hallo $(inputName.value) du bist $'
    })
}
// element.value greift auf den Inhalt von einem Inputfeld zu 
// der click funktioniert noch nicht, gleich mit Marco checken





