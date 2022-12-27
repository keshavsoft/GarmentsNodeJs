let express = require('express');
let router = express.Router();
let Repos = require("../../../../../Repository/AdminApi/Utility/Json/Folder/Insert");

router.get('/', function (req, res, next) {
  //  let LocalUserName = req.KeshavSoft.kUserName;
    let LocalDataPK = req.KeshavSoft.DataPk;

    Repos.Insert({ inToName: req.query.ToName, inDataPK: LocalDataPK }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    }).catch();
});

router.get('/FromParams/:FolderName', function (req, res, next) {
    //let LocalUserName = req.KeshavSoft.kUserName;
    let LocalFolderName = req.params.FolderName;
    let LocalDataPK = req.KeshavSoft.DataPk;

    Repos.Insert({ inToName: LocalFolderName, inDataPK: LocalDataPK }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    }).catch(PromiseError => {
        console.log("PromiseError : ", PromiseError);
    });
});

router.get('/OnlyFolder/:FolderName', function (req, res, next) {
    let LocalDataPK = req.KeshavSoft.DataPk;
    let LocalFolderName = req.params.FolderName;

    Repos.OnlyFolder({ inToName: LocalFolderName, inDataPK: LocalDataPK }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    }).catch();
});

router.get('/WithoutTemplate/:FolderName', function (req, res, next) {
    let LocalDataPK = req.KeshavSoft.DataPk;
    let LocalFolderName = req.params.FolderName;

    Repos.WithoutTemplate({ inToName: LocalFolderName, inDataPK: LocalDataPK }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    }).catch();
});

router.post('/Bulk/:FolderName', function (req, res, next) {
    let LocalDataPK = req.KeshavSoft.DataPk;
    let LocalFolderName = req.params.FolderName;
    let LocalBody = req.body;
   // console.log("Bulk-----------");
    Repos.Bulk({ inToName: LocalFolderName, inBody: LocalBody, inDataPK: LocalDataPK }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    }).catch();
});

module.exports = router;