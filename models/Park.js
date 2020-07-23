const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const parkSchema = new Schema(
    {
        park_name: { type: String, required: true },
        park_description: { type: String, required: true },
        park_address: { type: String, required: true },
        park_playground: { type: String, default: "No", required: true },
        park_toilets: { type: String, default: "No", required: true },
        park_exerciseFacilities: { type: String, default: "No", required: true },
        park_petsAllowed: { type: String, default: "No", required: true },
        user_id: { type: Schema.Types.ObjectId, ref: "User" }
    },
    { timestamps: true }
);

const Park = mongoose.model("Park", parkSchema);

module.exports = Park;
