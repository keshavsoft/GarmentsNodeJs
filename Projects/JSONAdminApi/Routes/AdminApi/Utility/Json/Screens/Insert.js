let express = require('express');
let router = express.Router();
let Repos = require("../../../../../Repository/AdminApi/Utility/Json/Screens/Insert");

router.post('/', function (req, res, next) {

    let LocalinFolderName = req.body.inFolderName;
    let LocalinJsonFileName = req.body.inJsonFileName;
    let LocalinItemName = req.body.inItemName;
    let LocalinScreenName = req.body.inScreenName;
    let LocalDataPK = req.KeshavSoft.DataPk;

    Repos.Insert({
        inJsonConfig: { inFolderName: LocalinFolderName, inJsonFileName: LocalinJsonFileName },
        inItemName: LocalinItemName,
        inToName: LocalinScreenName,
        inDataPK: LocalDataPK
    }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
        console.log("PromiseData:",PromiseData);
    }).catch(PromiseError => {
        res.end(JSON.stringify(PromiseError));
    });
});

module.exports = router;