let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let authorSchema = new Schema({
    name : {type : String},
    email : {type : String},
    country : {type : String},
    bookId : [{type : Schema.Types.ObjectId,  ref : "Book"}]

}, {timestamps : true});

module.exports = mongoose.model("Author", authorSchema);