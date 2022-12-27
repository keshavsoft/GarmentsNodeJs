let express = require('express');
let router = express.Router();
let Repos = require("../../../../../Repository/AdminApi/Config/TableInfo/TableRowOptions/Delete");

router.post('/Update', function (req, res, next) {
    let LocalDataPk = req.KeshavSoft.DataPk;
    let LocalUserName = req.KeshavSoft.kUserName;
    let LocalJsonConfig = req.KeshavSoft.JsonConfig;
    let LocalItemConfig = req.KeshavSoft.ItemConfig;
    let LocalObjectToUpdate = req.body;
    console.log("LocalObjectToUpdate:------------",LocalObjectToUpdate);

    Repos.Update({
        inJsonConfig: LocalJsonConfig,
        inItemConfig: LocalItemConfig,
        inObjectToUpdate: LocalObjectToUpdate,
        inUserName: LocalUserName,
        inDataPk: LocalDataPk,
    }).then(PromiseData=>{
        res.end(JSON.stringify(PromiseData));
    })
});

module.exports = router;