const express = require('express')
const app = express();
const cors =require('cors')
const port = process.env.PORT || 5000;

app.use(cors())

const categories = require('./data/categories.json')
const news = require('./data/news.json')


app.get('/news-categories' , (req, res)=>{
    res.send(categories);
})

app.get('/category/:id' ,(req , res)=>{
    const id = req.params.id;
    if(id === '08'){
        res.send(news)
    }
    else{
        const categoryNews = news.filter(n=>n.category_id === id);
        res.send(categoryNews);
    }
  
})

app.get('/news/:id',(req , res)=>{
    const id = req.params.id;
    const selectedNews =news.find(n => n._id === id);
        res.send(selectedNews);
    
})







app.get('/' , (req , res)=>{
    res.send('News API is running')
});

app.listen(port ,()=>{
    console.log('News Portal Port is', port)
})