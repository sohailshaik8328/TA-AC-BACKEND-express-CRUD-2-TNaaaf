let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let bookSchema = new Schema({
    title : {type : String, required : true},
    summary : {type : String},
    pages : {type : Number},
    publication : {type : String, default : new Date },
    coverImage : {type : String},
    category : {type : String},
    authorId : {type : Schema.Types.ObjectId, ref : "Author"}
}, {timestamps : true})

module.exports = mongoose.model("Book", bookSchema);