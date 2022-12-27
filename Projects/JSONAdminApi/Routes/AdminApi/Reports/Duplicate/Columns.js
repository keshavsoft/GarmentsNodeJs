let express = require('express');
let router = express.Router();
let Repos = require("../../../../Repository/AdminApi/Reports/Duplicate/Columns");

router.get('/', function (req, res, next) {
    let LocalItemConfig = {};
    let LocalUserName = req.KeshavSoft.kUserName;
    LocalItemConfig.inItemName = req.query.inItemName;
    LocalItemConfig.inPkName = req.query.inPkName;

    Repos.Single({
        inJsonConfig: req.KeshavSoft.JsonConfig, inItemConfig: LocalItemConfig, inFromName: req.query.inFromName, inToName: req.query.inToName, inUserName: LocalUserName, callback: (data, error) => {
            res.end(JSON.stringify(data));
        }
    });
});

router.get('/TableColumn/:inItemName/:inFromName/:inToName', function (req, res, next) {
    let LocalItemConfig = {};
    let LocalUserName = req.KeshavSoft.kUserName;
    LocalItemConfig.inItemName = req.params.inItemName;

    Repos.TableColumn({
        inItemConfig: LocalItemConfig, inFromName: req.params.inFromName, inToName: req.params.inToName, inUserName: LocalUserName
    }).then(PromiseData => {
        console.log("PromiseData : ", PromiseData);
        res.end(JSON.stringify(PromiseData));
    });
});

module.exports = router;