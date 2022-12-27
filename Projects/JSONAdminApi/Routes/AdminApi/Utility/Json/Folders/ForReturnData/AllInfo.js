let express = require('express');
let router = express.Router();
let Repos = require("../../../../../../Repository/AdminApi/Utility/Json/Folder/ForReturnData/AllInfo");

router.get('/FromTable', function (req, res, next) {
    let LocalUserPK = req.KeshavSoft.DataPk;

    Repos.FromTable({ inUserPK: LocalUserPK }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    }).catch();
});

router.get('/FromVertical', function (req, res, next) {
    let LocalUserPK = req.KeshavSoft.DataPk;
    
    Repos.FromVertical({ inUserPK: LocalUserPK }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    }).catch();
});

router.get('/FromSubTable', function (req, res, next) {
    let LocalUserPK = req.KeshavSoft.DataPk;

    Repos.FromSubTable({ inUserPK: LocalUserPK }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    }).catch();
});

module.exports = router;