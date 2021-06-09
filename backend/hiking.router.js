const express = require("express");
const router = express.Router();
const controller = require("./hiking.controller");

router.get("/hiking/list", controller.getHikingList);

router.get("/", controller.test);

router.get("/hiking/location", controller.getHikingLocation);

router.post("/hiking/add", controller.createHiking);

router.delete("/hiking/delete/:id", controller.deleteHiking);

router.put("/hiking/edit/:id", controller.editHiking);


module.exports = router;
