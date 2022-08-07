const fs = require('fs')

const readStream = fs.createReadStream('./blog1.txt', {encoding:'utf8'})
const writeStream = fs.createWriteStream('./blog2.txt',)

readStream.on('data', (chunk)=>{
    console.log("---CHUNK---")
    console.log(chunk);

    //writeStream.write('\nNEW CHUNK\n')
    //writeStream.write(chunk)
})

readStream.pipe(writeStream);
