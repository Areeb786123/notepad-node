const express = require('express');
const mongoose = require('mongoose');

const Post = mongoose.model('Post');

const app = express.Router();

app
.get('/home',async(req,res) => {
    Post.find().then(show_post => {
        res.json(show_post)
    }).catch(err => {
        console.log(err)
        req.send(err)
    })
})


app.post('/home',(req,res) =>{

    

})
module.exports = app;