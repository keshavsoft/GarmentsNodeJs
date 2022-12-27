let express = require("express");
let router = express.Router();

let Repos = require("../../../../../../Repository/AdminApi/Utility/Json/FromFolder/FromFile/Insert");
let Middleware = require("../../../../../../Middlewares/ForRoutes/AdminApi/Utility/Json/FromFolder/FromFile/Insert");

router.post('/', Middleware.Insert, (req, res) => {
    let LocalFolderName = req.body.inFolderName;
    let LocalFileName = req.body.inFileName;

    let LocalDataPK = req.KeshavSoft.DataPk;

    Repos.OnlyFile({
        inFolderName: LocalFolderName,
        inFileName: LocalFileName,
        inDataPK: LocalDataPK
    }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    }).catch();
});

module.exports = router;
