const logger = (req, res, next) => { //next= it allows the req to contiue pass through the middleware to controllers
    console.log(req.method, req.originalUrl) //htpp methods will be defined here 
    next() // in order to allow the request to flwo through that middleware
}

module.exports = logger