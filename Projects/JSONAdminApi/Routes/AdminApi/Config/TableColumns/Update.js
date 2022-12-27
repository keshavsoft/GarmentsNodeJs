let express = require('express');
let router = express.Router();
let Repos = require("../../../../Repository/AdminApi/Config/TableColumns/Update");

router.post('/', function (req, res, next) {
    let LocalUserName = req.KeshavSoft.kUserName;
    let LocalJsonConfig = req.KeshavSoft.JsonConfig;
    let LocalItemConfig = req.KeshavSoft.ItemConfig;
    let LocalQueryObject = req.KeshavSoft.KQueryObject;
    let LocalObjectToUpdate = req.body;
   // console.log("LocalObjectToUpdate  : ", LocalObjectToUpdate);
    Repos.Update({
        inJsonConfig: LocalJsonConfig, inItemConfig: LocalItemConfig, inObjectToUpdate: LocalObjectToUpdate, inQueryObject: LocalQueryObject, inUserName: LocalUserName, callback: (data, error) => {
            res.end(JSON.stringify(data));
        }
    });
});

module.exports = router;