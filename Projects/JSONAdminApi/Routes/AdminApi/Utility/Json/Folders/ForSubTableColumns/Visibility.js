let express = require('express');
let router = express.Router();
let Repos = require("../../../../../../Repository/AdminApi/Utility/Json/Folder/ForSubTableColumns/Visibility");

router.get('/WithDataAttributeAndDisplayName', function (req, res, next) {
    let LocalUserPK = req.KeshavSoft.DataPk;

    Repos.WithDataAttributeAndDisplayName({ inUserPK: LocalUserPK }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    }).catch();
});

router.get('/Toggles', function (req, res, next) {
    let LocalUserPK = req.KeshavSoft.DataPk;

    Repos.Toggles({ inUserPK: LocalUserPK }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    }).catch();
});

router.get('/KDataset', function (req, res, next) {
    let LocalUserPK = req.KeshavSoft.DataPk;

    Repos.KDataset({ inUserPK: LocalUserPK }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    }).catch();
});

router.get('/DisplayType', function (req, res, next) {
    let LocalUserPK = req.KeshavSoft.DataPk;

    Repos.DisplayType({ inUserPK: LocalUserPK }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    }).catch();
});

router.get('/Widths', function (req, res, next) {
    let LocalUserPK = req.KeshavSoft.DataPk;
    
    Repos.Widths({ inUserPK: LocalUserPK }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    }).catch();
});

router.get('/AllInOneWithValues', function (req, res, next) {
    let LocalUserPK = req.KeshavSoft.DataPk;

    Repos.AllInOneWithValues({ inUserPK: LocalUserPK }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    }).catch();
});

router.get('/Widths', function (req, res, next) {
    let LocalUserPK = req.KeshavSoft.DataPk;

    Repos.Widths({ inUserPK: LocalUserPK }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    }).catch();
});

router.get('/DisplayOrder', function (req, res, next) {
    let LocalUserPK = req.KeshavSoft.DataPk;

    Repos.DisplayOrder({ inUserPK: LocalUserPK }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    }).catch();
});

module.exports = router;
