let express = require('express');
let router = express.Router();
//let Repos = require("../../../../../Repository/AdminApi/Utility/Json/File/Insert");
let Controller = require("../../../../../Controllers/AdminApi/Utility/Json/FirmDetails/FromMsSql");

router.post('/', Controller.PostFunc);

module.exports = router;