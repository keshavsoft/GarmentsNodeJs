let express = require("express");
let router = express.Router();
let Repos = require("../../../../../Repository/AdminApi/Config/TableInfo/Vertical/VerticalCreate")

router.post('/Update', (req, res) => {
    console.log("ok-------------");
    let LocalDataPk = req.KeshavSoft.DataPk;
    let LocalJsonConfig = req.KeshavSoft.JsonConfig;
    let LocalItemConfig = req.KeshavSoft.ItemConfig;
    let LocalObjectToUpdate = req.body;
    Repos.Update({
        inDataPk: LocalDataPk,
        inJsonConfig: LocalJsonConfig,
        inItemConfig: LocalItemConfig,
        inObjectToUpdate: LocalObjectToUpdate
    }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    }).catch()

});

module.exports = router;