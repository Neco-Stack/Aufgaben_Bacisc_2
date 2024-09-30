function showHero (heroName:string, heroPower:string, heroEnemy:string){
    let nameOutput : string = "Mein:e Lieblingsheld:in ist:  " + heroName;
    let powerOutput : string = "Er/sie hat die Fähigkeit: " + heroPower;
    let enemyOutput: string = "Sein/ihr größte/r Gegner:in ist: " + heroEnemy;
    console.log(nameOutput + powerOutput + enemyOutput);
}
showHero("Batman" , "Fliegen" , "Joker");