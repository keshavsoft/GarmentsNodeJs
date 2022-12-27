let express = require('express');
let router = express.Router();
let Repos = require("../../../../Repository/AdminApi/Config/TableInfo/Update");

router.post('/', function (req, res, next) {
    let LocalUserName = req.KeshavSoft.kUserName;
    let LocalJsonConfig = req.KeshavSoft.JsonConfig;
    let LocalItemConfig = req.KeshavSoft.ItemConfig;
    let LocalQueryObject = req.KeshavSoft.KQueryObject;
    Repos.Update({
        inJsonConfig: LocalJsonConfig, inItemConfig:LocalItemConfig, inObjectToUpdate: req.body, inQueryObject:LocalQueryObject, inUserName: LocalUserName, callback: (data, error) => {
            res.end(JSON.stringify(data));
        }
    });
});

module.exports = router;