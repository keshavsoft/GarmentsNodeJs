let express = require("express");
let router = express.Router();
let Repos = require("../../../../../Repository/AdminApi/Config/TableInfo/SearchRowArray/Label");

router.post('/PullData', function (req, res, next) {
  let LocalFolderName;
  let LocalFileName;
  let LocalItemName;
  let LocalScreenName;

  let LocalDataPK;
console.log("sssssss");
  if (("FolderName" in req.body) === false) res.json("Need to send FolderName");

  LocalFolderName = req.body.FolderName;

  if (("FileName" in req.body) === false) res.json("Need to send FileName");

  LocalFileName = req.body.FileName;

  if (("ItemName" in req.body) === false) res.json("Need to send ItemName");

  LocalItemName = req.body.ItemName;

  if (("ScreenName" in req.body) === false) res.json("Need to send ScreenName");

  LocalScreenName = req.body.ScreenName;

  if (("KeshavSoft" in req) === false) res.json("Need to send KeshavSoft");

  if (("DataPk" in req.KeshavSoft) === false) res.json("Need to send KeshavSoft");

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

router.post('/UpdateData', function (req, res, next) {
  let LocalFolderName;
  let LocalFileName;
  let LocalItemName;
  let LocalScreenName;
  let LocalDataPK;
  let LocalDataToUpdate;

  if (("FolderName" in req.body) === false) res.json("Need to send FolderName");

  LocalFolderName = req.body.FolderName;

  if (("FileName" in req.body) === false) res.json("Need to send FileName");

  LocalFileName = req.body.FileName;

  if (("ItemName" in req.body) === false) res.json("Need to send ItemName");

  LocalItemName = req.body.ItemName;

  if (("ScreenName" in req.body) === false) res.json("Need to send ScreenName");

  LocalScreenName = req.body.ScreenName;

  if (("KeshavSoft" in req) === false) res.json("Need to send KeshavSoft");

  if (("DataPk" in req.KeshavSoft) === false) res.json("Need to send KeshavSoft");

  LocalDataPK = req.KeshavSoft.DataPk;

  if (("inDataToUpdate" in req.body) === false) res.json("Need to send inDataToUpdate");

  LocalDataToUpdate = req.body.inDataToUpdate;

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
});

module.exports = router;