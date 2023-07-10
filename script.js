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
        
        return this.hull -= attackedValue
        console.log(`ship was hit for ${attackedValue} the hull is now at ${this.hull}`)
    }

    // attack(attacking,ship){
    //   attacking = this._firePower
    //   return ship.hull -= attacking
    //   console.log(`An attack mas made for `)
    // }

    // getAttacked(attackedValue){
    //     return this._hull -= attackedValue
    //     console.log(`ship was hit for ${attackedValue} health is now ${this._hull}`)
    // }

}

const ussAssembly = new Ship('ussAssembly',20,5,0.7)

console.log(ussAssembly.accuracy)
console.log(ussAssembly.getAttacked(1))