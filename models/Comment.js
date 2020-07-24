const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
    {
        body: { type: String, required: true },
        user_id: { type: Schema.Types.ObjectId, ref: "User" },
        park_id: { type: Schema.Types.ObjectId, ref: "Park" },
    },
    { timestamps: true }
);

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;