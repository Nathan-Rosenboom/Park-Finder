const express = require("express");
const Comment = require("../../models/Comment.js");
const router = express.Router();

router.get("/comments", (req, res) => {

    console.log(req.query)

    
    const query = {}
    if(req.query.park_id){
        query.park_id = req.query.park_id
    }
    Comment.find(query)
    .populate('user')
    .then((results) => {
        res.json({
            data: results,
        });
    });
});

router.get("/comments/:id", (req, res) => {
    Comment.findOne({
        _id: req.params.id,
    })
        .populate("user")
        .then((result) => {
            result.user = res.json({
                data: result,
            });
        });
});

router.post("/comments", (req, res) => {
    Comment.create({
        user_id: req.user._id,
        park_id: req.body.park_id,
        body: req.body.body,
    }).then(async (created) => {
        await created.populate('user').execPopulate()
        res.json({
            data: created,
        });
    }).catch((err) => {
        res.status(422).json({
            errors: [
                {
                    msg: err
                }
            ]
        })
    });
});

router.patch("/comments/:id", (req, res) => {
    Comment.findByIdAndUpdate(
        req.params.id,
        {
            $push: req.body,
        },
        { new: true, runValidators: true }
    ).then((updated) => {
        res.json({
            data: updated,
        });
    });
});

router.delete("/comments/:id", (req, res) => {
    Comment.findByIdAndDelete(req.params.id).then((deleted) => {
        res.json({
            data: true,
        });
    });
});

module.exports = router;