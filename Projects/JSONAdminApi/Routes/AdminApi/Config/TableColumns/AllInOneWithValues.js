let express= require("express");
let router= express.Router();

let CommonControllers = require("../../../../Controllers/AdminApi/Config/TableColumns/AllInOneWithValues.Controllers")

router.patch("/",CommonControllers.Update)



module.exports =router;