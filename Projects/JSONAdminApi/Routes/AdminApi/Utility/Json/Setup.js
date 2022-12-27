let express = require('express');
let router = express.Router();
let Repos = require("../../../../Repository/AdminApi/Utility/Json/Setup");

router.get('/:inDataPk', function (req, res, next) {
    let LocalDataPk = req.params.inDataPk;
    Repos.FromDataPk({ inDataPk: LocalDataPk }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    }).catch();
});

module.exports = router;