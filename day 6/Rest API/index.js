const express = require('express')
const routes = require('./routes/api')
const bodyParser = require('body-parser')
const { default: mongoose } = require('mongoose')

//set up express app
const app = express()


//connnect to db
const dbURI = 'mongodb+srv://dtvdawg:test1234@cluster0.mxneafe.mongodb.net/rest-api?retryWrites=true&w=majority'
mongoose.connect(dbURI)
    .then((result) => app.listen(process.env.port || 4000))
    .catch((err) => console.log(err))

mongoose.Promise = global.Promise


//set up static files
app.use(express.static('public'));


app.use(bodyParser.json())

//initializing routes
app.use('/api', routes)

app.use((err, req, res, next)=>{
    res.status(422).send({error: err.message})
})




//listen for requests
// app.listen(process.env.port || 4000, ()=>{
  //  console.log("listening for requests")
//})

