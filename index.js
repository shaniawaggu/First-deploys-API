require('dotenv').config()  //

const app = require('./app')
const port = process.env.PORT //define the port variable . this was prev 3000

//want to replace this js variable with environmetn variable
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
 })
  