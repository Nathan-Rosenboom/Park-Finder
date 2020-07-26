const express = require("express");
const auth = require("./api/auth/auth");
const user = require("./api/userRoutes");
const park = require("./api/parkRoutes");
const comment = require("./api/comment Routes");
const isAuthenticated = require("../middleware/authenticationMiddleware");


const router = express.Router()

router.use(auth);
router.use(isAuthenticated);
router.use(user);
router.use(park);
router.use(comment);

module.exports = router;