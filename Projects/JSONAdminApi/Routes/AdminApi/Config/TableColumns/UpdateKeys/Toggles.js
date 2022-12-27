let express = require('express');
let router = express.Router();
let Repos = require("../../../../../Repository/AdminApi/Config/TableColumns/UpdateKeys/Toggles");
let CommonController = require("../../../../../Controllers/AdminApi/Config/TableColumns/UpdateKeys/Toggles.Controllers");

router.post('/', function (req, res, next) {
    let LocalDataPk = req.KeshavSoft.DataPk;
    let LocalJsonConfig = req.KeshavSoft.JsonConfig;
    let LocalItemConfig = req.KeshavSoft.ItemConfig;
    let LocalQueryObject = req.KeshavSoft.KQueryObject;
    let LocalObjectToUpdate = req.body;
    let LocalTableColumnName = req.KeshavSoft.ItemConfig.inColumnName

    Repos.Update({
        inJsonConfig: LocalJsonConfig,
        inItemConfig: LocalItemConfig,
        inObjectToUpdate: LocalObjectToUpdate,
        inQueryObject: LocalQueryObject,
        inTableColumnName: LocalTableColumnName,
        inDataPk: LocalDataPk
    }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    }).catch(PromiseError => {
        res.end(JSON.stringify(PromiseError));
    });
});

router.patch('/', CommonController.patchFunc)

module.exports = router;