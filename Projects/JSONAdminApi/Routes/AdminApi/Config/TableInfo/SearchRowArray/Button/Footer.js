let express = require('express');
let router = express.Router();
let Repos = require("../../../../../../Repository/AdminApi/Config/TableInfo/SearchRowArray/Button/Footer");
let Middleware = require("../../../../../../Middlewares/ForRoutes/AdminApi/Config/TableInfo/SearchRowArray/Button/Footer");

router.post('/PullData',Middleware.PullData, function (req, res, next) {
  let LocalFolderName = req.body.FolderName;
  let LocalFileName = req.body.FileName;
  let LocalItemName = req.body.ItemName;
  let LocalScreenName = req.body.ScreenName;

  LocalDataPK = req.KeshavSoft.DataPk;

  Repos.PullData({
    inFolderName: LocalFolderName,
    inFileNameWithExtension: LocalFileName,
    inItemName: LocalItemName,
    inScreenName: LocalScreenName,
    inDataPK: LocalDataPK,
  }).then(PromiseData => {
    res.json(PromiseData);
  });
});

router.post('/WithApi',Middleware.PullData, function (req, res, next) {
  console.log("ttttttttttttttttttt.........");
  let LocalFolderName = req.body.FolderName;
  let LocalFileName = req.body.FileName;
  let LocalItemName = req.body.ItemName;
  let LocalScreenName = req.body.ScreenName;

  LocalDataPK = req.KeshavSoft.DataPk;

  Repos.WithApi({
    inFolderName: LocalFolderName,
    inFileNameWithExtension: LocalFileName,
    inItemName: LocalItemName,
    inScreenName: LocalScreenName,
    inDataPK: LocalDataPK,
  }).then(PromiseData => {
    res.json(PromiseData);
  });
});

router.post('/UpdateData', Middleware.UpdateData, function (req, res, next) {
  let LocalFolderName = req.body.FolderName;
  let LocalFileName = req.body.FileName;
  let LocalItemName = req.body.ItemName;
  let LocalScreenName = req.body.ScreenName;
  let LocalDataToUpdate = req.body.inDataToUpdate;

  let LocalDataPK = req.KeshavSoft.DataPk;

  Repos.UpdateData({
    inFolderName: LocalFolderName,
    inFileNameWithExtension: LocalFileName,
    inItemName: LocalItemName,
    inScreenName: LocalScreenName,
    inDataPK: LocalDataPK,
    inDataToUpdate: LocalDataToUpdate
  }).then(PromiseData => {
    res.json(PromiseData);
  });
})




module.exports = router;