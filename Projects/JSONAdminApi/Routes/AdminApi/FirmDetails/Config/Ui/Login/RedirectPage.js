var express = require('express');
var router = express.Router();
let CommonControllers = require("../../../../../../../../Projects/JSONAdminApi/Controllers/AdminApi/FirmDetails/Config/Ui/Login/RedirectPage");

router.get('/', CommonControllers.GetFuncs);
router.patch('/', CommonControllers.PatchFuncs);



module.exports = router;