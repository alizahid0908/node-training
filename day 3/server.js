const http = require('http')

const server = http.createServer((req, res)=>{
    console.log("Request Made") //this code is running on local server not in browser


    res.setHeader('Content-Type', 'text/plain')

    res.write("Hello Blyat XAXAXA")

    res.end()

})


server.listen(3000, 'localhost', ()=>{
    console.log("listening to request on port 3000")
})

