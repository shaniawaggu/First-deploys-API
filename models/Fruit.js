const fruits = require("../fruits.json") 

// const fruit = fruits.filter(fruit => fruit.name.toLowerCase() === name)
/
// if (fruit.length === 1) {
//     res.status(200).send(fruit)
// } else {
//     res.status(404).send("The fruit doesnt exist on the API")
// }

// You will need to build a class
// It will have a constructor to build instances of the fruit to return to the controller
// method showAll will access fruits json and return instances of all fruit to controller
// methid show which access one fruit, build an instance and return to controller 'show"

//handling of the data relates to the model

class Fruit {
    constructor(fruit) {
        this.genus = fruit.genus;
        this.name = fruit.name;
        this.id = fruit.id;
        this.family = fruit.family;
        this.order = fruit.order;
        this.nutritions = fruit.nutritions;
    }

    static showAll() {
        return fruits.map(q => new Fruit(q));
    }

    static show(name) {
        const fruit = fruits.find((fruit) => fruit.name.toLowerCase() == name);

        if (fruit) {
            return new Fruit(fruit);
        } else {
            throw Error("The fruit doesn't exist.");
        }
    }
    static create = (data) => {
        const newFruit = data
        console.log(newFruit)
        const fruit = fruits.find(fruit => fruit.name.toLowerCase() === newFruit.name.toLowerCase())
        if (fruit) {
            throw Error("The fruit already exists")
        } else {
            newFruit["id"] = fruits.length + 1 // [] to target the key id
            fruits.push(newFruit)
            return new Fruit(newFruit)//build an instance of it
        }
    }

    update(data) {
        const updatedFruit = fruits.find(fruit => fruit.name.toLowerCase() === this.name.toLowerCase() )
        if(updatedFruit) {
            updatedFruit.name = data.name
            updatedFruit.family = data.family
            return new Fruit(updatedFruit)
        } else {
            throw Error("Fruit not found")
        }
    }

    destroy() {
        const deletedFruit = fruits.find(fruit => fruit.name.toLowerCase() === this.name.toLowerCase())
        if (deletedFruit) {
            const index = fruits.indexOf(deletedFruit)
            fruits.splice(index, 1)
        }else {
            throw Error("Fruit not found")
        }
    }
}

//module.exports = Fruit