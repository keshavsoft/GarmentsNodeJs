let express = require("express");
let router = express.Router();

let CommonController = require("../../../../../Controllers/AdminApi/Config/TableColumns/ServerSide/TransformBeforeSave.Controllers");

router.get("/", CommonController.GetFunc);
router.patch("/", CommonController.PachFunc);

module.exports = router;