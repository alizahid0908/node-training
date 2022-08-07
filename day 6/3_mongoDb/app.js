const express = require('express')
const mongoose = require('mongoose')
const Blog = require('./models/blog')

//express app
const app = express()

//connect to db
const dbURI = 'mongodb+srv://dtvdawg:test1234@cluster0.mxneafe.mongodb.net/node-tuts?retryWrites=true&w=majority'
mongoose.connect(dbURI)
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err))


//register view engine
app.set('view engine', 'ejs')

//mongoose and mongo routes
app.get('/create-blog', (req, res) => {
    const blog = new Blog({
      title: 'new blog 2',
      snippet: 'about my new blog',
      body: 'more about my new blog'
    })
  
    blog.save()
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        console.log(err);
      });
  });


  app.get('/all-blogs', (req, res)=>{
    Blog.find()
        .then((result)=>{
            res.send(result)
        })
        .catch((err)=>{
            console.log(err)
        })
  })


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