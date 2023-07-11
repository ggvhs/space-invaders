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
            return targetShip.hull -= attackedValue
        }else{
            console.log(`Your shot at ${targetShip.name} missed`)
        }
        
    }

}


class UssAssembly extends Ship{
    constructor(name,hull, firePower, accuracy){
        super(name, hull, firePower, accuracy)
    }

    get hull(){
       return this._hull 
    }

    set hull(value){
        if(value >= 0){
            this._hull = value
        }else{
            console.log(`Your ship was destroyed`)
        }
    }

    startGunfight(enemyShip){}
    // For Each alien ship that is alive in my array: 

    // use startGunFight method 

    //The USS ship will shoot first given accuracy 
    //Reguardless of hit or miss alien ship will attack next given accuracy

    //Call gunFight within itself 



}







const hitProbability = Math.random();
console.log(hitProbability)














// let alienHull = Math.random() * 3 + 3;
// const ussAssembly = new Ship('ussAssembly',20,5,0.7)
// const alienShip = new Ship('alienShip',alienHull)

// console.log(ussAssembly.accuracy)
// console.log(ussAssembly.getAttacked(1))
// console.log(`Alient hull is ${alienHull}`)
// console.log(ussAssembly.attack(alienShip,1));
