const Fruit = require("../models/Fruit") // importing of the model that handles the info. Fruit is a class 

// the controller should call the model in each function and the model will return the data we need to sen
// back to the client

const index = (req, res) => { // async await as databsae could fail with an error
    try{
        const fruits = Fruit.showAll() 
        res.status(200).send(fruits)
    } catch (err) {
        res.status(500).send({error: "Server error"})
    }
     
}
// handling of the request to the respoene lives in the controller 
const show = (req, res) =>{
    const name = req.params.name.toLowerCase() //this code should live in our controllers
    try {
        const fruit = Fruit.show(name)
        res.status(200).send(fruit)
    } catch (err) {
        res.status(404).send({error: err.message}) //404 = not found
    }

}

const create = async (req, res) => {
    try{
        const newFruit = await Fruit.create(req.body)
        res.status(201).send(newFruit)
    } catch (err) {
        res.status(409).send({error: err.message})
    }
}

const update = async (req, res) => {
    const name = req.params.name.toLowerCase()
    try {
        const fruit = await Fruit.show(name)
        const result = await fruit.update(req.body) 
        res.status(200).send(result)
    }catch (err){
        res.status(404).send({error: err.message})
    }
}

const destroy = async (req, res) => {
    const name = req.params.name.toLowerCase()
    try {
        const fruit = await Fruit.show(name)
        const result = await fruit.destroy()
        res.sendStatus(204)
    } catch (err) {
        res.status(404).send({error: err.message})
    }
}


// this belongs in the model
// const name = req.params.name.toLowerCase() //this code should live in our controllers
//     const fruit = fruits.filter(fruit => fruit.name.toLowerCase() === name)
// -return fru
//     if (fruit.length === 1) {
//         res.status(200).send(fruit)
//     } else {
//         res.status(404).send("The fruit doesnt exist on the API")
//     }

module.exports = {
    index, show, create , update, destroy
}