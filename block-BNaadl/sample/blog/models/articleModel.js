let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let articleSchema = new Schema({
    title :{type : String},
    description : {type : String},
    tags : {type : [String]},
    author : {type : String},
    likes : {type : Number}
}, {timestamps : true})

let article = mongoose.model("Article", articleSchema);

module.exports = article;