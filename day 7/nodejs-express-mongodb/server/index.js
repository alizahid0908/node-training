const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const FoodModel = require('./models/Food')


const app = express();


app.use(express.json())


mongoose.connect("mongodb+srv://dtvdawg:test1234@crud.reaa1n2.mongodb.net/food?retryWrites=true&w=majority")

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));





// simple route
app.get("/", async(req, res) => {
  res.send("What's Up  Dude");

  const food = FoodModel({
    foodName: "Apple",
    daysSinceIAte: 3
  })
  try{
    await food.save()
  }catch(err){
    console.log(err)
  }

});
// set port, listen for requests

app.listen(process.env.PORT || 3001, () => {
  console.log(`Server is running.`);
});
