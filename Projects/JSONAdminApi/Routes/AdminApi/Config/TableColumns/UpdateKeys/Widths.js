let express = require('express');
let router = express.Router();
let Repos = require("../../../../../Repository/AdminApi/Config/TableColumns/UpdateKeys/Widths");

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
    }).then(PromiseData=>{
        res.end(JSON.stringify(PromiseData));
    }).catch(PromiseError=>{
        res.end(JSON.stringify(PromiseError));
    });
});

module.exports = router;