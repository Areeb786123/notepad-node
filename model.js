const mongoose = require('mongoose');

const blog_schema = new mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type:String
    }
})

mongoose.model('Post',blog_schema)