let express = require('express');
let router = express.Router();
let Repos = require("../../../../../../Repository/AdminApi/Utility/Json/Folder/ForTableColumns/FromKeys");

router.get('/Toggles', function (req, res, next) {
    let LocalUserPK = req.KeshavSoft.DataPk;

    Repos.Toggles({ inDataPk: LocalUserPK }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    }).catch();
});

module.exports = router;