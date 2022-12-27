let express = require('express');
let router = express.Router();
let Repos = require("../../../../../../../Repository/AdminApi/Utility/Json/Folder/ForTableInfo/ParentClasses/Table");

router.get('/', function (req, res, next) {
    let LocalUserPK = req.KeshavSoft.DataPk;

    Repos.Table({ inUserPK: LocalUserPK }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    }).catch();
});

module.exports = router;