//importing file system
const fs = require('fs')

//creating file

//fs.writeFile('./text.txt', "hello again", () =>{
//    console.log("file was created")
//})

//read file

//fs.readFile('./text.txt', (err, data) =>{
//    if(err){
//        console.log(err)
//    }
//    console.log(data.toString())
//})

//write to file

//fs.writeFile('./text.txt', "Hello Blyat XAXAXA", ()=>{
//    console.log("file upadated")
//})


// Directories

//if(!fs.existsSync('./assets')){
//    fs.mkdir('./assets', (err) => {
//        if(err){
//            console.log(err)
//        }
//        console.log("Directory Created")
//    })
//}
//else{
//    fs.rmdir('./assets', (err) => {
//        if(err){
 //           console.log(err)
//        }
//        console.log("Directory Deleted")
//    })
//}

// Delete Files

if(fs.existsSync('./deleteme.txt')){
    fs.unlink('./deleteme.txt', (err) =>{
        if(err){
            console.log(err)
        }
        console.log("Get Yeeted")
    })
}

else{
    console.log("There's no such file genius")
}