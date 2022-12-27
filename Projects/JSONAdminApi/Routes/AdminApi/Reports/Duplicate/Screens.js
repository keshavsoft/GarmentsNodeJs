let express = require('express');
let router = express.Router();
let Repos = require("../../../../Repository/AdminApi/Reports/Duplicate/Screens");
let debug = require("debug")("KS29");

router.get('/', function (req, res, next) {
    let LocalItemConfig = req.KeshavSoft.ItemConfig;
   
    console.log("data--------------",req.query.inFromName,req.query.inToName,LocalItemConfig.inItemName);

    Repos.Single({
        inJsonConfig: req.KeshavSoft.JsonConfig, inItemName: LocalItemConfig.inItemName, inFromName: req.query.inFromName, inToName: req.query.inToName, inUserName: req.cookies.kUserName, callback: (data, error) => {
         console.log("data",data);
            res.end(JSON.stringify(data));
        }
    });
});

module.exports = router;