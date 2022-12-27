let express = require('express');
let router = express.Router();
let Repos = require("../../../../../Repository/AdminApi/Reports/Duplicate/VouchersConsider/Columns")

router.get('/', function (req, res, next) {
    let LocalItemConfig = req.KeshavSoft.ItemConfig;
    let LocalUserName = req.KeshavSoft.kUserName;
    //console.log("llllllllllllllll", req.KeshavSoft);
    Repos.Single({
        inItemName: LocalItemConfig.inItemName,
        inFromName: req.query.inFromName,
        inToName: req.query.inToName,
        inUserName: LocalUserName
    }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    });
});

router.get('/WithParams/:inItemName/:inPkName/:inFromName/:inToName', function (req, res, next) {
    let LocalUserName = req.KeshavSoft.kUserName;
    console.log("WithParams", req.KeshavSoft);
    Repos.Single({
        inItemName: req.params.inItemName,
        inPkName: req.params.inPkName,
        inFromName: req.params.inFromName,
        inToName: req.params.inToName,
        inUserName: LocalUserName
    }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    });
});


module.exports = router;