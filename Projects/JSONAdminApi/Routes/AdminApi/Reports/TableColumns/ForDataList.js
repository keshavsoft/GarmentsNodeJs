let express = require('express');
let debug = require("debug")("KS15");
let router = express.Router();
let Repos = require("../../../../Repository/AdminApi/Reports/TableColumns/ForDataList");

router.get('/ShowItemNames', function (req, res, next) {
    let LocalReportName = req.query.inReportName;
    let LocalUserName = req.KeshavSoft.kUserName;

    Repos.ShowItemNames({
        inReportName: LocalReportName, inUserName: LocalUserName, callback: (data, error) => {
            res.end(JSON.stringify(data));
        }
    });
});

module.exports = router;