let express = require('express');
let router = express.Router();
let Repos = require("../../../../Repository/AdminApi/Reports/Utilities/Fix");

router.get('/:ReportItemName', function (req, res, next) {
    let LocalReportItemName = req.params.ReportItemName;
    let LocalUserName = req.KeshavSoft.kUserName;

    //console.log("LocalReportItemName : ", LocalReportItemName);

    Repos.JSONParams({
        inReportName: LocalReportItemName, inUserName: LocalUserName
    }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    });
});

module.exports = router;