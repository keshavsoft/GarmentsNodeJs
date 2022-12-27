let express = require('express');
let router = express.Router();
let Repos = require("../../../../../Repository/AdminApi/Config/Preload/UpdateKeys/Columns");

router.post('/', (req, res, next) => {
    console.log("0000000000000000000");
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