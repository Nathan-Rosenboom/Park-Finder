const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
    {
        body: { type: String, required: true },
        user_id: { type: Schema.Types.ObjectId, ref: "User" },
        park_id: { type: Schema.Types.ObjectId, ref: "Park" },
    },
    { timestamps: true, toJSON: {
        virtuals: true
    } }
);

commentSchema.virtual("user", {
    ref: "User",
    localField: "user_id",
    foreignField: "_id",
    justOne: true,
});

commentSchema.virtual("park", {
    ref: "Park",
    localField: "park_id",
    foreignField: "_id",
    justOne: true,
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;