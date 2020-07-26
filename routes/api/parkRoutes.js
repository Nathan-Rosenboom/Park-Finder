const express = require("express");
const Park = require("../../models/Park");
const router = express.Router();

const loadCommentsAggregate = [
    {
        $lookup: {
            from: "comments",
            let: { parkId: "$_id" },
            pipeline: [
                { $match: { $expr: { $eq: ["$park_id", "$$parkId"] } } },
            ],
            as: "comments",
        },
    },
    {
        $sort: {
            createdAt: -1
        }
    }
];

router.get("/parks", (req, res) => {
    Park.aggregate(loadCommentsAggregate).then((parks) => {
        return Park.populate(parks, {
            path: 'user'
        })
    }).then((parks) => {
        res.json({
            data: parks
        });
    });
});

router.get("/parks/:id", (req, res) => {
    Park.findOne({
        _id: req.params.id
    })
    .populate('user')
    .then((result) => {
        result.user = 
        res.json({
            data: result,
        });
    });
});

router.post("/parks", (req, res) => {
    // validation
    Park.create({
        name: req.body.name,
        description: req.body.description,
        streetAddress: req.body.streetAddress,
        city: req.body.city,
        state: req.body.state,
        playground: req.body.playground,
        toilets: req.body.toilets,
        exerciseFacilities: req.body.exerciseFacilities,
        petsAllowed: req.body.petsAllowed,
        //user_id: req.user._id
    }).then(async (created) => {


        await created.populate('user').execPopulate()

        // to keep data structure consistent
        created.comments = [];

        console.log({created});

        res.json({
            data: created,
        });
    });
});

router.patch("/parks/:id", (req, res) => {
    Park.findByIdAndUpdate(
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

module.exports = router;