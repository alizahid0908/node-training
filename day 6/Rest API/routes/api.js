const express = require('express')
const router = express.Router()
const Slav = require('../models/slavs')

//get the list of slavs from db
router.get('/slavs', (req,res,next)=>{
    Slav.aggregate()
    .near({
      near: {
        type: "Point",
        coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]
      },
      maxDistance: 300000, // 300 KM
      spherical: true,
      distanceField: "distance"
    })
    .then(slavs => {
      console.log(slavs);
      if (slavs) {
        if (slavs.length === 0)
          return res.send({
            message:
              "maxDistance is too small, or your query params {lng, lat} are incorrect (too big or too small)."
          });
        return res.send(slavs);
      }
    })
    .catch(next);
})

//add new slav to db
router.post('/slavs', (req,res,next)=>{
    Slav.create(req.body).then((slav)=>{
        res.send(slav)
    }).catch(next)
})

//update a slav in db
router.put('/slavs/:id', (req,res,next)=>{
    Slav.findByIdAndUpdate({_id:req.params.id}, req.body).then(()=>{
        Slav.findOne({_id:req.params.id}).then((slav)=>{
            res.send(slav)
        })
    })
})

//delete a slav from db
router.delete('/slavs/:id', (req,res,next)=>{
    Slav.findByIdAndRemove({_id:req.params.id}).then((slav)=>{
        res.send(slav)
    })
})  


module.exports = router

