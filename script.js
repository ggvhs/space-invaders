
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


const UssAssembly = new Ship('ussAssembly',20,5,.7);

const numberOfShips = 6;
const ships = [
new AlienShip('Alien1'),
new AlienShip('Alien2'),
new AlienShip('Alien3'),
new AlienShip('Alien4'),
new AlienShip('Alien5'),
new AlienShip('Alien6'),
];

const startGunFightButton = document.getElementById('Start-Conflict')
const runAway = document.getElementById('Run-Away')

const turnOffButtons = function (){
    startGunFightButton.disabled = true
    runAway.disabled = true
}



runAway.addEventListener('click' , () =>{
     turnOffButtons();
     console.log(`You ran away`)
})

let shipTargetingIndex = 0;

startGunFightButton.addEventListener('click', () =>{
    const targetedShip = ships[shipTargetingIndex];
    UssAssembly.attack(targetedShip);

        
        if(targetedShip.hull > 0){
            targetedShip.attack(UssAssembly)
        }else{
            console.log(`${targetedShip.name} have been defeated`)
            shipTargetingIndex++;

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
