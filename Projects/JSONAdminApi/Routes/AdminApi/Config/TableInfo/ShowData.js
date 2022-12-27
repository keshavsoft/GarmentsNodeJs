let express = require('express');
let router = express.Router();
let Repos = require("../../../../Repository/AdminApi/Config/TableInfo/ShowData");

router.get('/', function (req, res, next) {
    let LocalUserName = req.KeshavSoft.kUserName;
    let LocalJsonConfig = req.KeshavSoft.JsonConfig;
    let LocalItemConfig = req.KeshavSoft.ItemConfig;
    let LocalQueryObject = req.KeshavSoft.KQueryObject;

    Repos.ShowData({
        inJsonConfig: LocalJsonConfig, inItemConfig:LocalItemConfig, inUserName: LocalUserName, inQueryObject: LocalQueryObject, callback: (data, error) => {
            res.end(JSON.stringify(data));
        }
    });
});


module.exports = router;