const express = require('express')

const app = express()

app.set('view engine', 'ejs')


app.listen(3000)

app.get('/', (req, res)=>{
    const blogs = [
        {title : 'Doug Gate', snippet: 'hello blyat xaxaxaxa'},
        {title : 'Knee Drop', snippet: 'hello blyat xaxaxaxa'},
        {title : 'Wound Packing', snippet: 'hello blyat xaxaxaxa'}
    ]
    res.render('index', {title : 'Home', blogs})
})

app.get('/about', (req, res)=>{

    res.render('about', {title : 'About'})
})

app.get('/create-blog', (req, res)=>{

    res.render('blogs', {title : 'Blog'})
})


//Redirect 

app.get('/about-us', (req, res)=>{

    res.redirect('about')
})


app.use((req, res)=>{

    res.status(404).render('404', {title : '404'})
})