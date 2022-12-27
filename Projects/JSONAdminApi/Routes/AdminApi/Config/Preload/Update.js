let express = require('express');
let router = express.Router();
let Repos = require("../../../../Repository/AdminApi/Config/Preload/Update");

router.post('/', function (req, res, next) {
   // debug("preload : ", req.KeshavSoft);
    Repos.Update({
        inJsonConfig: req.KeshavSoft.JsonConfig,
        inItemConfig: req.KeshavSoft.ItemConfig,
        inObjectToUpdate: req.body,
        inQueryObject: req.KeshavSoft.KQueryObject,
        inUserName: req.KeshavSoft.kUserName,
        callback: (data, error) => {
            res.end(JSON.stringify(data));
        }
    });
});

module.exports = router;