const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res)=>{
    console.log(req.url, req.method) //this code is running on local server not in browser


    res.setHeader('Content-Type', 'text/html')

    fs.readFile('./views/demo.html', (err, data)=>{
        if(err){
            console.log(err)
            res.end()
        }
        else{
            res.end(data)
        }
    })

})


server.listen(3000, 'localhost', ()=>{
    console.log("listening to request on port 3000")
})

