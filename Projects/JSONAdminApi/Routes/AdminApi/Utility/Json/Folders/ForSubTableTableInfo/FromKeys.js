let express = require('express');
let router = express.Router();
let Repos = require("../../../../../../Repository/AdminApi/Utility/Json/Folder/ForTableInfo/FromKeys");

router.get('/ColumnReOrder', function (req, res, next) {
    let LocalUserPK = req.KeshavSoft.DataPk;

    Repos.ColumnReOrder({ inUserPK: LocalUserPK }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    }).catch();
});

router.get('/MainKeys', function (req, res, next) {
    let LocalUserPK = req.KeshavSoft.DataPk;
   // console.log("MainKeys-----------");
    Repos.MainKeys({ inUserPK: LocalUserPK }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    }).catch();
});
router.get('/Delete', function (req, res, next) {
    let LocalUserPK = req.KeshavSoft.DataPk;
   console.log("Delete-----------");
    Repos.Delete({ inUserPK: LocalUserPK }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    }).catch();
});

module.exports = router;