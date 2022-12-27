let express = require("express");
let router = express.Router();
let Repos = require("../../../../../../Repository/AdminApi/Utility/Json/Folder/ForSubTableColumns/KDataAttributes");

router.get('/', (req, res, next) => {
    let LocalUserPK = req.KeshavSoft.DataPk;

    Repos.KDataAttributes({ inUserPK: LocalUserPK })
        .then(PromiseData => {
            res.end(JSON.stringify(PromiseData));
        }).catch();
});

module.exports = router;