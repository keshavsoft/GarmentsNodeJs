let express = require('express');
let router = express.Router();
let Repos = require("../../../../../../Repository/AdminApi/Utility/Json/Data/Items/Insert");

router.post('/Bulk/:inFolderName/:inJsonFileName', function (req, res, next) {
  let LocalBody = req.body;
  let LocalJsonConfig = {
    inFolderName: req.params.inFolderName,
    inJsonFileName: req.params.inJsonFileName,
  };

  Repos.Bulk({
    inJsonConfig: LocalJsonConfig,
    inBody: LocalBody,
    inUserPK: req.KeshavSoft.DataPk
  }).then(PromiseData => {
    res.end(JSON.stringify(PromiseData));
  }).catch(PromiseError => {
    res.end(JSON.stringify(PromiseError));
  });

  res.end(JSON.stringify({}));

});

router.get('/', function (req, res, next) {
  //let LocalUserName = req.KeshavSoft.kUserName;
  let LocalToName = req.query.ToName;
  let LocalDataPk = req.KeshavSoft.DataPk;

  Repos.Insert({
    inJsonConfig: req.KeshavSoft.JsonConfig,
    inToName: LocalToName,
    inDataPk: LocalDataPk
  }).then(PromiseData => {
    res.end(JSON.stringify(PromiseData));
  }).catch(PromiseError => {
    res.end(JSON.stringify(PromiseError));
  });
});

module.exports = router;