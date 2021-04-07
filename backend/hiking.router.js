const express = require("express");
const router = express.Router();
const controller = require("./hiking.controller");

router.get("/hiking/list", controller.getHikingList);

router.get("/", controller.test);

router.get("/hiking/location", controller.getHikingLocation);

module.exports = router;
