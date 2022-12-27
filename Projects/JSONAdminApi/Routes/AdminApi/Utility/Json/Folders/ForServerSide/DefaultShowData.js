let express = require('express');
let router = express.Router();
let Repos = require("../../../../../../Repository/AdminApi/Utility/Json/Folder/ForServerSide/DefaultShowData");


router.get('/AsTree', function (req, res, next) {
    let LocalUserPK = req.KeshavSoft.DataPk;
    
    Repos.AsTree({ inUserPK: LocalUserPK }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    }).catch();
});

module.exports = router;