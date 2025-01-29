const express = require("express") //import express
const fruitsRouter = express.Router() //functionality of express
const fruits = require("../controllers/fruits")

//get followed by the two end points
fruitsRouter.get("/", fruits.index) // to acces this controller you have to use '/fruits'
//define the show route
fruitsRouter.get("/:name",fruits.show)
fruitsRouter.post("/", fruits.create)// posting to the endpoint 
fruitsRouter.patch("/name", fruits.update) // calls to methods on the model 
fruitsRouter.delete("/:name", fruits.destroy)

module.exports = fruitsRouter
