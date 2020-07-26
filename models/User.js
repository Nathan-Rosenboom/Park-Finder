const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
    },
    { timestamps: true }
);

userSchema.pre('save', async function save(next) {
    const user = this;
    if (!user.isModified('password')) { return next(); }
    bcrypt.genSalt(10, (err, salt) => {}).then((salt) => {
        return bcrypt.hash(user.password, salt);
    }).then((hash) => {
        user.password = hash;
        next();
    }).catch((err) => {
        return next(err);
    });
});

userSchema.methods.comparePassword = function comparePassword(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
        cb(err, isMatch);
    });
};

const User = mongoose.model("User", userSchema);

module.exports = User;