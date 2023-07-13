
// Ship Class
class Ship{
    constructor(name,hull, firePower, accuracy){
        this._name = name
        this._hull = hull
        this._firePower= firePower
        this._accuracy = accuracy
    }

    get name(){
        return this._name
    }

    get hull(){
        return this._hull
    }

    set hull(value){
        this._hull = value
    }

    get firePower(){
        return this._firePower
    }

    get accuracy(){
        return this._accuracy
    }

    getAttacked(attackedValue){
        console.log(`ship was hit for ${attackedValue} the hull is now at ${this.hull}`)
        return this.hull -= attackedValue
      
    }

    attack(targetShip){
        const hitProbability = Math.random();
        if(hitProbability <= this.accuracy){
            console.log(` ${targetShip.name} hit for ${this.firePower} damage and now their health is ${targetShip.hull - this.firePower}`)
            console.log(`The attacking vessels health is ${this.hull}`)
            return targetShip.hull -= this.firePower
            
        }else{
            console.log(`The shot at ${targetShip.name} missed`)
        }
        
    }



}

// I made an alien class to change the default values for this child class of ship 
// could have just saved global random variables and then called them on my below INSTANCIATIONS but I wanted to oop as much as possible  
class AlienShip extends Ship{
    constructor(name){
        const hull = Math.random() * 3 + 3
        const firePower = Math.random() * 2 + 4
        const accuracy = Math.random() * 0.2 + 0.6

        super(name, hull, firePower, accuracy);
    }
}

//Instanciated my class
const UssAssembly = new Ship('ussAssembly',20,5,.7);

const numberOfShips = 6;
const ships = [

];

//This is my updated code for more effective use of INSTANCIATING using a for loop
//compared to previous commits if I wanna add 30 ships I can now just say numberOfShips = 30 instead of copying and pasting 24 more times 
for(let i =0; i <= numberOfShips; i++){
    const AlienShips = new AlienShip(`Alien${i}`)
    ships.push(AlienShips)
}




//Both of my vanilla buttons
const startGunFightButton = document.getElementById('Start-Conflict')
const runAway = document.getElementById('Run-Away')

const turnOffButtons = function (){
    startGunFightButton.disabled = true
    runAway.disabled = true
}


//Once clicked I simply disable the buttons (usuing the function above^^^^) using the function above
runAway.addEventListener('click' , () =>{
     turnOffButtons();
     console.log(`You ran away`)
})

//This kinda is bad because I could have just used a for loop after my-
//event listener below I will highlight keep elements that cued me in on why I couldve just used a for loop
//In a version that was never pushed I tried the for loop but was unsucessful



//this is the same as saying let i=0;
let shipTargetingIndex = 0;

startGunFightButton.addEventListener('click', () =>{
    const targetedShip = ships[shipTargetingIndex];
    UssAssembly.attack(targetedShip);

        //if enemy is alive after we attacked them they attack back
        if(targetedShip.hull > 0){
            targetedShip.attack(UssAssembly)
        }else{
            //If an enemy;s health is 0 or lower than that then it is dead
            console.log(`${targetedShip.name} have been defeated`)
            //My increment
            shipTargetingIndex++;

            //My condition if my index var that I made above has reached the ships length then all ships were destroyed
            if(shipTargetingIndex >= ships.length){
                turnOffButtons()
                console.log('All Ships have been destroyed')
            }
        }

    if(UssAssembly.hull <=0){
        console.log(`Game Over the world is doomed`)
        turnOffButtons();
    }

    
})






//I INSTACIATED MY USS CLASS
// const UssAssembly = new Ship('ussAssembly',20,5,.7);

//Checking the properties of my INSTANCIATED class
// console.log(UssAssembly.hull)
// console.log(UssAssembly.firePower)
// console.log(UssAssembly.accuracy)

//I INSTANCIATED MY ALIEN CLASSES
// const numberOfShips = 6;
// const ships = [
// new AlienShip('Alien1'),
// new AlienShip('Alien2'),
// new AlienShip('Alien3'),
// new AlienShip('Alien4'),
// new AlienShip('Alien5'),
// new AlienShip('Alien6'),
// ];

// Checks to see if my test for alien ship works
// console.log(ships[0].firePower)
// console.log(ships[0].hull);
// console.log(ships[0].accuracy)

//Check to see if My attack function works on both ends of my class instanstiation
// console.log(UssAssembly.attack(ships[0]))
// console.log(ships[0].attack(UssAssembly))
