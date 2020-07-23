const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const parkSchema = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        streetAddress: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        playground: { type: Boolean, default: false, required: true },
        toilets: { type: Boolean, default: false, required: true },
        exerciseFacilities: { type: Boolean, default: false, required: true },
        petsAllowed: { type: Boolean, default: false, required: true },
        user_id: { type: Schema.Types.ObjectId, ref: "User" }
    },
    { timestamps: true }
);

const Park = mongoose.model("Park", parkSchema);

module.exports = Park;
