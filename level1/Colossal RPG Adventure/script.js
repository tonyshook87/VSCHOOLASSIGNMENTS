const readlinesync= require ("readline-sync");

const playerName=readlinesync.question("Hello! What is your name?");

console.log (`Welcome ${playerName} to the RPG game!`)

let isGameRunning=true;

class Character {
    constructor (name, healthPoints, attackPoints, inventory){
        this.name=name;
        this.healthPoints= healthPoints;
        this.attackPoints= attackPoints;
        this.inventory= inventory;
    
    }
    printInventory(){
        console.log(`Inventory.${this.inventory}`)
        // this displays the array not each item  
    }
}

let inventory= ["bow", "sword", "axe", "rocket-launcher"];

const hero= new Character (playerName, 100,5, inventory);
const enemy1= new Character("Trick Tim", 25, 2, ["Tooth", "Bracelet"]);
const enemy2= new Character("Lulu", 36, 3, ["sword", "Necklace"]);
const enemy3= new Character("Mickey", 18, 1, ["Ears"]);

let enemies= [enemy1, enemy2, enemy3];

const getRandomNumber= (min, max)=> {
 return Math.floor (Math.random ()* (max-min)+ min);

};

while (isGameRunning){
    if(enemies.length === 0 || enemies == null){
        console.log(
            `Congratulations ${hero.name}! You have defeated all enemies! You Win!`
        );
        isGameRunning = false
        break
    }
let action = readlinesync.question (
    "What do you want to do?  Press [w] to walk, [i] to see your inventory, or [q] to quit",
    {limit: ["w", "i", "q"]}
);

if (action==="w") {
     walk()

} else if (action==="i"){
    hero.printInventory()

} else if (action==="q"){

    isGameRunning= false
} 
}

function walk(){
    console.log(`${hero.name}, you are walking!!`)
    // if an enemy shows up
let enemyChance = getRandomNumber (1,4);
console.log (enemyChance);
let currEnemy;
if (enemyChance

){
    let randomEnemyIndex= getRandomNumber (0, enemies.length-1);
  currEnemy=enemies[randomEnemyIndex]

    console.log(`${currEnemy.name}has appeared`)
}

    
    // get a random number between 1 and 3
    // if it's a 1 then enemy shows up otherwise keep walking

    //when an enemy shows up then you need a fight function (while loop)
    // logic for fight... conditionally checking each round the hero and the enemys health
    const options= ["fight","run"];
    const fightorRun= readlinesync.keyInSelect (
        options,
        "do you want to fight or run?"
    );
    console.log (options [fightorRun])
    if (options [fightorRun]==="fight"){
        fight (currEnemy);
    }
    else if(options[fightorRun]==="run"){
        run (currEnemy)
    }
    else if(action==="i"){
        hero.printInventory();
    }
    else if(action==="q"){
        console.log ("You chose to quit!");
        isGameRunning= false;
    }
}
function fight(currEnemy){
    let endFight = false;

    
        while (hero.healthPoints>0 && currEnemy.healthPoints>0) {
        currEnemy.healthPoints = currEnemy.healthPoints - hero.attackPoints 

        console.log (`You dealt ${hero.attackPoints} damage ${currEnemy.name} is now at ${currEnemy.healthPoints}`);

        if (currEnemy.healthPoints<=0){
            console.log (`Congrats, you have defeated ${currEnemy.name}`)
            currEnemy.healthPoints = 0;
            endFight = true;
            const index = enemies.indexOf(currEnemy)
            enemies.splice(index, 1)
            // process.exit()
            break
        }

        console.log (currEnemy)
        hero.healthPoints = hero.healthPoints - currEnemy.attackPoints;
        console.log(
            `${currEnemy.name} dealt ${currEnemy.attackPoints} damage! ${hero.name} is now at ${hero.healthPoints}`
        );
        
        

        if (hero.healthPoints<=0){
            console.log ('Sorry, you died!');
            hero.healthPoints = 0;
            isGameRunning = false;
            endFight = true
            process.exit()
            break
        }
        
    }
}
function run(currEnemy){
    console.log(`You chose to run from ${currEnemy.name}`);
    let escapeChance= getRandomNumber(1,2);
    if(escapeChance===1){
        console.log (`Congrats ${hero.name}, you escaped!!!`);
    }
    else if(escapeChance===2){
        console.log
    }
}

// game loop



    



