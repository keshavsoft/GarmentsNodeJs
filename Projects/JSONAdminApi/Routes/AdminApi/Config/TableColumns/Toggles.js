let express= require("express");
let router= express.Router();

let CommonControllers = require("../../../../Controllers/AdminApi/Config/TableColumns/Toggles.Controllers")

router.get("/",CommonControllers.GetFunc)
router.patch("/",CommonControllers.Update)



module.exports =router;