let express = require('express');
let router = express.Router();
let Repos = require("../../../../../Repository/AdminApi/Utility/Json/Columns/Insert");

router.post('/', function (req, res, next) {
    let LocalinFolderName = req.body.inFolderName;
    let LocalinJsonFileName = req.body.inJsonFileName;
    let LocalinItemName = req.body.inItemName;
    let LocalinScreenName = req.body.inScreenName;
    let LocalColumnName = req.body.inkeyName;

    let LocalDataPk = req.KeshavSoft.DataPk;

    Repos.Insert({
        inJsonConfig: { inFolderName: LocalinFolderName, inJsonFileName: LocalinJsonFileName },
        inItemConfig: {inItemName:LocalinItemName,inScreenName:LocalinScreenName },
        inColumnName:LocalColumnName,
        inDataPk: LocalDataPk
    }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    }).catch(PromiseError => {
        res.end(JSON.stringify(PromiseError));
    });
});

module.exports = router;
