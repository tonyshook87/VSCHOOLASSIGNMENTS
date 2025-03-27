const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
    text: {
        type: String,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    issue: {
        type: Schema.Types.ObjectId,
        ref: "Issue"
    },
    username: {
        type: String,
        required: true
    }

})


module.exports = mongoose.model('Comment', commentSchema)