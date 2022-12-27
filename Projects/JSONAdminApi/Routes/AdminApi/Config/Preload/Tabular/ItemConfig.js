let express = require('express');
let router = express.Router();
let Repos = require("../../../../../Repository/AdminApi/Config/Preload/Tabular/ItemConfig");

router.get('/', function(req, res, next) {
    Repos.ShowData({
        inUserPK: req.KeshavSoft.DataPk,
        callback: (data, error) => {
            res.end(JSON.stringify(data));
        }
    });
});

module.exports = router;