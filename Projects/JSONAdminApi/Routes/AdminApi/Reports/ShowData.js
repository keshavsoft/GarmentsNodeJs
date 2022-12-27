let express = require('express');
let router = express.Router();
let Repos = require("../../../Repository/AdminApi/Reports/ShowData");

router.get('/', function (req, res, next) {
    Repos.VouchersConsider({
        inJsonConfig: req.KeshavSoft.JsonConfig,
        inReportConfig: req.KeshavSoft.ReportConfig, inUserName: req.KeshavSoft.kUserName, inQueryObject: req.KeshavSoft.KQueryObject, callback: (data, error) => {
            res.end(JSON.stringify(data));
        }
    });
});

module.exports = router;