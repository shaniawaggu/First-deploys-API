const express = require('express')
const cors = require('cors')
const app = express()

const logger = require("./logger")

//middleware - 
// - Passing json into js - Logger - logs that traffic that comes into the server
// - This is useful for debugging see what reuests are useful for what endpoint and see what requests are succeeding
app.use(cors()) // allow this rrequest to come through, you are allowed to share resorces accorss different origings
app.use(express.json())
app.use(logger) // no () as we only it to run when triggered 

const fruitsRouter = require("./routes/fruits")

const fruits = require("./fruits.json")

app.get('/', (req, res) => {
  res.send('Hello Fruity!')
})

app.use("/fruits", fruitsRouter)

app.get("/fruits") 

app.get("/fruits/:name") //info on the request body followed by param

app.get("/no-content", (req, res) =>{
    res.sendStatus (403) .send("Do not go there");
})


module.exports = app  // no curly brackes needed