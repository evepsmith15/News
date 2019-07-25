let mongoose = require('mongoose');
let Schema = mongoose.Schema; // Save a Reference to the Schema Constructor

// Using the Schema constructor, create a new CommentSchema object

var commentSchema = new Schema({
    body: String
});

var Comment = mongoose.model("Comment", commentSchema);

// Export the Comment model
module.exports = Comment;