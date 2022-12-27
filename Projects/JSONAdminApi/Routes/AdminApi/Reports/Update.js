let express = require('express');
let router = express.Router();
let Repos = require("../../../Repository/AdminApi/Reports/Update");

router.post('/', function (req, res, next) {
    console.log("VouchersConsider : ");
    Repos.VouchersConsider({
        inJsonConfig: req.KeshavSoft.JsonConfig, inReportConfig: req.KeshavSoft.ReportConfig, inObjectToUpdate: req.body, inUserName: req.KeshavSoft.kUserName, inQueryObject: req.KeshavSoft.KQueryObject, callback: (data, error) => {
            res.end(JSON.stringify(data));
        }
    });
});

module.exports = router;