let express = require('express');
let router = express.Router();
let Repos = require("../../../../Repository/AdminApi/Config/Preload/ShowData");

router.get('/', function(req, res, next) {
    Repos.ShowData({
        inJsonConfig: req.KeshavSoft.JsonConfig,
        inItemConfig: req.KeshavSoft.ItemConfig,
        inUserName: req.KeshavSoft.kUserName,
        inQueryObject: req.KeshavSoft.KQueryObject,
        callback: (data, error) => {
            res.end(JSON.stringify(data));
        }
    });
});

module.exports = router;