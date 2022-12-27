let express = require('express');
let router = express.Router();
let Repos = require("../../../../../Repository/AdminApi/Utility/Json/PreLoad/Duplicate");

router.get('/', function (req, res, next) {
    let LocalUserName = req.KeshavSoft.kUserName;
    
    Repos.Single({
        inFromName: req.KeshavSoft.UtilityConfig.FromName, inToName: req.KeshavSoft.UtilityConfig.ToName, inUserName: LocalUserName
    }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    }).catch(PromiseError => {
        res.end(JSON.stringify(PromiseError));
    });
});

module.exports = router;