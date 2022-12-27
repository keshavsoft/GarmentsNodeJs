let express = require('express');
let router = express.Router();
let Repos = require("../../../../../../Repository/AdminApi/Utility/Json/Folder/ForTableInfo/Visibility");

router.get('/TableRowOptions', function (req, res, next) {
    let LocalUserPK = req.KeshavSoft.DataPk;
    console.log("TableRowOptions : ");
    Repos.TableRowOptions({ inUserPK: LocalUserPK }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    }).catch();
});

module.exports = router;