let express = require('express');
let router = express.Router();
let Repos = require("../../../../../Repository/AdminApi/Config/Preload/UpdateKeys/JsonConfig");

router.post('/', function (req, res, next) {

    let LocalDataPk = req.KeshavSoft.DataPk;
    let LocalBody = req.body;

    Repos.Update({
        inDataPk: LocalDataPk,
        inObjectToUpdate: LocalBody,

    }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    });

});

module.exports = router;