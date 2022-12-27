let express = require('express');
let router = express.Router();
let Repos = require("../../../../../Repository/AdminApi/Utility/Json/Folder/AsTree");

router.get('/ForSubTableColumns', function (req, res, next) {
    //console.log("------ : ", req.KeshavSoft);
    let LocalUserPK = req.KeshavSoft.DataPk;

    Repos.ForSubTableColumns({ inUserPK: LocalUserPK }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    }).catch();
});

module.exports = router;