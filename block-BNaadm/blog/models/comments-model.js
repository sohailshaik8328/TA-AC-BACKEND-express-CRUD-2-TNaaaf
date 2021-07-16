let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let commentsSchema = new Schema({
    content : {type : String, required : true},
    articleId  : {type : Schema.Types.ObjectId, ref : "Article", required : true}
}, {timestamps : true})

let Comments = mongoose.model("Comments", commentsSchema);

module.exports = Comments;