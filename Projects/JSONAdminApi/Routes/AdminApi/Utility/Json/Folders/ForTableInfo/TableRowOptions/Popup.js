let express = require('express');
let router = express.Router();
let Repos = require("../../../../../../../Repository/AdminApi/Utility/Json/Folder/ForTableInfo/TableRowOptions/Popup");

router.get('/', function (req, res, next) {
    let LocalUserPK = req.KeshavSoft.DataPk;

    Repos.Popup({ inUserPK: LocalUserPK }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    }).catch();
});

module.exports = router;