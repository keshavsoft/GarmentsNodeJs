let express = require('express');
let router = express.Router();
//let Repos = require("../../../../../Repository/AdminApi/Utility/Json/File/Insert");

router.get('/', function (req, res, next) {
    let LocalBody = req.body;
    console.log("LocalBody : ", LocalBody);

    // Repos.Bulk({
    //     inFolderName: LocalFolderName,
    //     inBody: LocalBody,
    //     inUserPK: req.KeshavSoft.DataPk
    // }).then(PromiseData => {
    //     res.json(PromiseData);
    // }).catch(PromiseError => {
    //     res.end(JSON.stringify(PromiseError));
    // });

    res.json({});
});

router.post('/', function (req, res, next) {
    let LocalBody = req.body;
    console.log("LocalBody : ", LocalBody);

    // Repos.Bulk({
    //     inFolderName: LocalFolderName,
    //     inBody: LocalBody,
    //     inUserPK: req.KeshavSoft.DataPk
    // }).then(PromiseData => {
    //     res.json(PromiseData);
    // }).catch(PromiseError => {
    //     res.end(JSON.stringify(PromiseError));
    // });

    res.json({});
});

module.exports = router;