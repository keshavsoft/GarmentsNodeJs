let express = require('express');
let router = express.Router();
let Repos = require("../../../../../../Repository/AdminApi/Utility/Json/Folder/ForTableColumns/Visibility");

router.get('/WithDataAttributeAndDisplayName', function (req, res, next) {
    let LocalUserPK = req.KeshavSoft.DataPk;
    console.log("LocalUserPK : ", LocalUserPK);
    Repos.WithDataAttributeAndDisplayName({ inDataPk: LocalUserPK }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    }).catch();
});

router.get('/Toggles', function (req, res, next) {
    let LocalUserPK = req.KeshavSoft.DataPk;

    Repos.Toggles({ inUserPK: LocalUserPK }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    }).catch();
});

router.get('/AllInOneWithValues', function (req, res, next) {
    let LocalUserPK = req.KeshavSoft.DataPk;

    Repos.AllInOneWithValues({ inUserPK: LocalUserPK }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    }).catch();
});

router.get('/KDataset', function (req, res, next) {
    let LocalUserPK = req.KeshavSoft.DataPk;

    Repos.KDataset({ inUserPK: LocalUserPK }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    }).catch();
});

router.get('/ParentClasses', function (req, res, next) {
    let LocalUserPK = req.KeshavSoft.DataPk;

    Repos.ParentClasses({ inUserPK: LocalUserPK }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    }).catch();
});

router.get('/WithOutSubTableColumns', function (req, res, next) {
    let LocalUserPK = req.KeshavSoft.DataPk;

    Repos.WithOutSubTableColumns({ inUserPK: LocalUserPK }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    }).catch();
});

router.get('/DisplayType', function (req, res, next) {
    let LocalUserPK = req.KeshavSoft.DataPk;

    Repos.DisplayType({ inUserPK: LocalUserPK }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    }).catch();
});

router.get('/KDatasetStuff', function (req, res, next) {
    let LocalUserPK = req.KeshavSoft.DataPk;

    Repos.KDatasetStuff({ inUserPK: LocalUserPK }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    }).catch();
});

router.get('/Dynamic/:inKeyForServerSide', function (req, res, next) {
    let LocalUserPK = req.KeshavSoft.DataPk;
    let LocalKeyForServerSide = req.params.inKeyForServerSide;

    Repos.Dynamic({
        inUserPK: LocalUserPK,
        inKeyForServerSide: LocalKeyForServerSide
    }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    }).catch();
});

router.get('/DataAttributes', function (req, res, next) {
    let LocalUserPK = req.KeshavSoft.DataPk;

    Repos.DataAttributes({ inUserPK: LocalUserPK }).then(PromiseData => {
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