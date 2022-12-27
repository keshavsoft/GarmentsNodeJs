let express = require('express');
let router = express.Router();
let Repos = require("../../../../../Repository/AdminApi/Reports/Duplicate/VouchersConsider/ArrayItem")

router.get('/', function (req, res, next) {
    let LocalItemConfig = req.KeshavSoft.ItemConfig;
    let LocalUserName = req.KeshavSoft.kUserName;

    Repos.Single({
        inJsonConfig: req.KeshavSoft.JsonConfig, inItemName: LocalItemConfig.inItemName, inFromName: req.query.inFromName, inToName: req.query.inToName, inUserName: LocalUserName
    }).then(PromiseData => {
        console.log("PromiseData : ", PromiseData);
        res.end(JSON.stringify(PromiseData));
    });
});

module.exports = router;