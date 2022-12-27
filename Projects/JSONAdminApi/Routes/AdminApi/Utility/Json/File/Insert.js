let express = require('express');
let router = express.Router();
let Repos = require("../../../../../Repository/AdminApi/Utility/Json/File/Insert");

router.get('/', function (req, res, next) {
    let LocalUserName = req.KeshavSoft.kUserName;
    let LocalFileName = req.query.ToName;

    Repos.Insert({
        inJsonConfig: req.KeshavSoft.JsonConfig, inToName: LocalFileName, inUserName: LocalUserName
    }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    }).catch(PromiseError => {
        res.end(JSON.stringify(PromiseError));
    });
});

router.post('/Bulk/:inFolderName', function (req, res, next) {
    let LocalBody = req.body;
    let LocalFolderName = req.params.inFolderName;

    Repos.Bulk({
        inFolderName: LocalFolderName,
        inBody: LocalBody,
        inUserPK: req.KeshavSoft.DataPk
    }).then(PromiseData => {
        res.json(PromiseData);
    }).catch(PromiseError => {
        res.end(JSON.stringify(PromiseError));
    });
});

router.post('/BulkWithFileName/:inFolderName/:inFileNameWithExtension', function (req, res, next) {
    let LocalBody = req.body;
    let LocalFolderName = req.params.inFolderName;
    let LocalFileNameWithExtension = `${req.params.inFileNameWithExtension}.json`;

    Repos.BulkWithFileName({
        inFolderName: LocalFolderName,
        inBody: LocalBody,
        inFileNameWithExtension: LocalFileNameWithExtension,
        inUserPK: req.KeshavSoft.DataPk
    }).then(PromiseData => {
        res.json(PromiseData);
    }).catch(PromiseError => {
        res.end(JSON.stringify(PromiseError));
    });
});

router.post('/TallySingleDate/:inFolderName', function (req, res, next) {
    let LocalBody = req.body;
    let LocalFolderName = req.params.inFolderName;

    Repos.TallySingleDate({
        inFolderName: LocalFolderName,
        inBody: LocalBody,
        inUserPK: req.KeshavSoft.DataPk
    }).then(PromiseData => {
        res.json(PromiseData);
    }).catch(PromiseError => {
        res.end(JSON.stringify(PromiseError));
    });
});

router.post('/TallySingleDateWithConfigInsertAlso/:inFolderName', function (req, res, next) {
    let LocalBody = req.body;
    let LocalFolderName = req.params.inFolderName;
    
    Repos.TallySingleDateWithConfigInsertAlso({
        inFolderName: LocalFolderName,
        inBody: LocalBody,
        inUserPK: req.KeshavSoft.DataPk
    }).then(PromiseData => {
        res.json(PromiseData);
    }).catch(PromiseError => {
        res.end(JSON.stringify(PromiseError));
    });
});

router.post('/TallySingleDateWithConfigInsertAndFromTemplate/:inFolderName', function (req, res, next) {
    let LocalBody = req.body;
    let LocalFolderName = req.params.inFolderName;
    
    Repos.TallySingleDateWithConfigInsertAndFromTemplate({
        inFolderName: LocalFolderName,
        inBody: LocalBody,
        inUserPK: req.KeshavSoft.DataPk
    }).then(PromiseData => {
        res.json(PromiseData);
    }).catch(PromiseError => {
        res.end(JSON.stringify(PromiseError));
    });
});

router.post('/TallyPeriod/:inFolderName', function (req, res, next) {
    let LocalBody = req.body;
    let LocalFolderName = req.params.inFolderName;
    Repos.TallyPeriod({
        inFolderName: LocalFolderName,
        inBody: LocalBody,
        inUserPK: req.KeshavSoft.DataPk
    }).then(PromiseData => {
        res.json(PromiseData);
    }).catch(PromiseError => {
        res.end(JSON.stringify(PromiseError));
    });
});

router.post('/FromParams/:inFolderName/:inFileNameWithExtension', function (req, res, next) {
    let LocalBody = req.body;
    let LocalFolderName = req.params.inFolderName;
    let LocalFileNameWithExtension = req.params.inFileNameWithExtension;

    Repos.FromParams({
        inFolderName: LocalFolderName,
        inFileNameWithExtension: LocalFileNameWithExtension,
        inBody: LocalBody,
        inUserPK: req.KeshavSoft.DataPk
    }).then(PromiseData => {
        res.json(PromiseData);
    }).catch(PromiseError => {
        res.end(JSON.stringify(PromiseError));
    });
});

router.get('/OnlyFile/:inFolderName/:inFileNameWithExtension', function (req, res, next) {
    let LocalFolderName = req.params.inFolderName;
    let LocalFileNameWithExtension = req.params.inFileNameWithExtension;
    let LocalUserPK = req.KeshavSoft.DataPk;

    Repos.OnlyFile({
        inFolderName: LocalFolderName,
        inFileNameWithExtension: LocalFileNameWithExtension,
        inUserPK: LocalUserPK
    }).then(PromiseData => {
        res.json(PromiseData);
    }).catch(PromiseError => {
        res.end(JSON.stringify(PromiseError));
    });
});

module.exports = router;