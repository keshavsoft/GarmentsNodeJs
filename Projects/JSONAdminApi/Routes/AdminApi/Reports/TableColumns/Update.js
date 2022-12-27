let express = require('express');
let router = express.Router();
let Repos = require("../../../../Repository/AdminApi/Reports/TableColumns/Update");

router.post('/DisplayType', function (req, res, next) {
    let LocalBodyData = req.body;
    let LocalColumnsPk = req.KeshavSoft.ReportConfig.inColumnsPk;
    let LocalDataPk = req.KeshavSoft.DataPk;

    Repos.DisplayType({
        inReportConfig: req.KeshavSoft.ReportConfig,
        inObjectToUpdate: LocalBodyData,
        inDataPk: LocalDataPk,
        inColumnsPk: LocalColumnsPk,
        callback: (data, error) => {
            res.end(JSON.stringify(data));
        }
    });

    res.end(JSON.stringify({}));

});

module.exports = router;