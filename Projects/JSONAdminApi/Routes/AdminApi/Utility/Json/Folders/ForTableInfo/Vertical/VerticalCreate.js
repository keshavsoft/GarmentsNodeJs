let express = require('express');
let router = express.Router();
let Repos = require("../../../../../../../Repository/AdminApi/Utility/Json/Folder/ForTableInfo/Vertical/VerticalCreate");

router.get('/', function (req, res, next) {
    console.log("jjjjjj");
    let LocalUserPK = req.KeshavSoft.DataPk;

    Repos.VerticalCreate({ inUserPK: LocalUserPK }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    }).catch();
});

module.exports = router;