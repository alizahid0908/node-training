const router = require('express').Router()
const verify = require('./verifyToken')


router.get('/',verify , (req, res)=>{
    res.json({
        posts:{
            title: "My First post",
            description: "random data you shoudn't access"
        }
    })
})


module.exports = router