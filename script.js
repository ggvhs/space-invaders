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

    attack(targetShip, attackedValue){
        const hitProbability = Math.random();
        if(hitProbability < this._accuracy){
            console.log(`You hit ${targetShip.name} for ${attackedValue} damage and now their health is ${targetShip.hull}`)
            return targetShip.hull -= attackedValue
            
        }else{
            console.log(`Your shot at ${targetShip.name} missed`)
        }
        
    }

    startGunfight(enemyShip){
    // For Each alien ship that is alive in my array: 

    // use startGunFight method 

    //The USS ship will shoot first given accuracy 
    //Reguardless of hit or miss alien ship will attack next given accuracy

    //Call gunFight within itself 
    }

}


class AlienShip extends Ship{
    constructor(name){
        const hull = Math.random() * 3 + 3
        const firePower = Math.random() * 2 + 4
        const accuracy = Math.random() * 0.2 + 0.6

        super(name, hull, firePower, accuracy);
    }
}

const MyAlienShip = new AlienShip;
//Checks to see if my test for alien ship works
// console.log(MyAlienShip.firePower)
// console.log(MyAlienShip.hull);
// console.log(MyAlienShip.accuracy)


const numberOfShips = 6;
const ships = [
new AlienShip('Alien1'),
new AlienShip('Alien2'),
new AlienShip('Alien3'),
new AlienShip('Alien4'),
new AlienShip('Alien5'),
new AlienShip('Alien6'),
];


