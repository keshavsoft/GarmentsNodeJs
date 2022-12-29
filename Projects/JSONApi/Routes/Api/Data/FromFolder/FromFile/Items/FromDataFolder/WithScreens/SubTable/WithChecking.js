let express = require('express');
let router = express.Router();
//let Repos = require("../../../../../../../Repository/Api/Data/FromFolder/FromFile/Items/FromDataFolder/AsArrayWithPK");
let CommonConrollers = require("../../../../../../../../controllers/Api/Data/FromFolder/FromFile/Items/FromDataFolder/WithScreens/WithChecking.controller");

router.post('/', CommonConrollers.PostFunc);
router.delete('/', CommonConrollers.DeleteFunc);
router.patch('/', CommonConrollers.PatchFunc);

module.exports = router;