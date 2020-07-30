const express = require("express");
const auth = require("./api/auth/auth.js");
const user = require("./api/userRoutes.js");
const park = require("./api/parkRoutes.js");
const comment = require("./api/commentRoutes.js");
const isAuthenticated = require("../middleware/authenticationMiddleware.js");
const router = express.Router()

router.use(auth);
router.use(isAuthenticated);
router.use(user);
router.use(park);
router.use(comment);

module.exports = router;