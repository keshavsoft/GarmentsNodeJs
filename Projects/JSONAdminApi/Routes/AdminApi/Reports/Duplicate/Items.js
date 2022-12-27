let express = require('express');
let router = express.Router();
let Repos = require("../../../../Repository/AdminApi/Reports/Duplicate/Items");

router.get('/', function (req, res, next) {
    let LocalDataPK = req.KeshavSoft.DataPk;

    Repos.Single({
        inJsonConfig: req.KeshavSoft.JsonConfig,
        inFromName: req.query.inFromName, inToName: req.query.inToName,
        inDataPK: LocalDataPK
    }).then(PromiseData => {
        console.log("PromiseData : ", PromiseData);
        res.end(JSON.stringify(PromiseData));
    });
});

module.exports = router;